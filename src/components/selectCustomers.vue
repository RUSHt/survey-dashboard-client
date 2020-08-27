<template>
	<div :class="['select-form select-customers','v-alert-container',{ 'v-background': background },{ 'off-top': !show }]" @click="backgroundClick($event)">
		<div class="v-alert" :style="{ position: position || '', width: width+'px' }">
            <header><p>Select Customers</p><div @click="exit('exit')" class="x"></div></header>
            <div class="label">
                <p style="float: left;">Customer Name / Mobile</p><p style="float: right;">Managers</p>
                <input placeholder="search" v-model="value" style="width:350px" />
                <input type="checkbox" style="float: right;border:1px solid black;width: 32px !important;height:32px" @change="selectManagers($event)" />
            </div>
            <div v-if="selected.length > 0" class="selected-items">
                <p>Selected</p>
                <div v-for="item in selected" v-if="selected" class="select-items"  style="display: grid;grid-template-columns: 90px 200px 200px;grid-column-gap: 10px;" >
                    <input type="checkbox" v-model="item.selected" @change="change('selected',item)" />
                    <p class="ellip" style="margin-top: 5px;">{{ item.name }}</p>
                    <p class="ellip" style="margin-top: 5px;">{{ item.prettyPhone || item.phone }}</p>
                </div>
            </div>
			<p>Select From</p>
            <div v-for="item in items" class="select-items" style="display: grid;grid-template-columns: 90px 200px 200px;grid-column-gap: 10px;">
                <input type="checkbox" v-model="item.selected" @change="change('items',item)" />
                <p class="ellip" style="margin-top: 5px;">{{ item.name }}</p>
                <p class="ellip" style="margin-top: 5px;">{{ item.prettyPhone || item.phone }}</p>                
            </div>
			<div class="v-btns">
				<p class="btn" @click="exit('send')">send</p>
			</div>	
		</div>
	</div>
</template>

<script>

var $el;

import Alert from '@/utils/Alert.js'
import WebSoc from '@/utils/WebSoc.js'
import makeMSISDN from '@/utils/makeMSISDN.js'
import prettyPhone from '@/utils/prettyPhone.js'

export default {
    props: {
        background: {
            default: true
        },
        position: 'fixed',
        resp: {
            default: () => {}
        },
        client_id: {
            default: ''
        },
        current: {
            default: []
        }
    },
    data () {
        return {
            width: 500,
            show: false,
            items: [],
            selected: [],
            value: '',
            db: '',
            managersSelected: false
        }
    },
    watch: {
        value (newVal) {
            this.search();
        }
    },
    mounted () {
		document.body.appendChild(this.$el);
        this.toogleShow();
        this.search();
        this.db = this.client_id ? this.client_id+'-customers' : 'jb-customers';
        this.current.forEach(customer => this.selected.push(customer));
    },
    methods: {
        change ( type, item ) {
            switch ( type ) {
                case 'items':
                    if ( item.selected ) { this.selected.push(item) } else { this.selected = this.selected.filter(i => i._id != item._id); }
                    break;
                case 'selected':
                    if ( !item.selected ) this.selected = this.selected.filter(i => i._id != item._id);
                    break;
            }
        },
        search () {
            var find = { $or: ['name','phone'].reduce((p,f) => { p.push({ [f]: { $regex: this.value, $options: 'i' } }); return p; },[]) }
            this.client_id && ( find.closed = { $exists: false });
            WebSoc.SEND('search',{ DB: this.db, find, project: { name: 1, phone: 1, msisdn: 1 }, limit: 15 },resp => {
                resp.forEach(i => { i.selected = false; i.prettyPhone = prettyPhone(i.msisdn) });
                this.items = resp;
            });
        },
        selectManagers ( e ) {
            this.items = this.items.filter(i => !i.manager);
            this.selected = this.selected.filter(i => !i.manager);
            if ( this.selectManagers ) {
                WebSoc.SEND('search',{ DB: this.db, find: { manager: true }, project: { name: 1, phone: 1, msisdn: 1 } },resp => {
                    console.log('resp',resp);
                    resp.forEach(i => { i.selected = true; i.prettyPhone = prettyPhone(i.msisdn) });
                    this.selected = this.selected.concat(resp);
                    this.items = this.items.concat(resp);
                });
            }
        },
        exit ( type ) {
            switch ( type ) {
                case 'exit':
                    this.toogleShow();
                    return setTimeout(() => this.$el.parentElement.removeChild(this.$el),350); 
                case 'send':
                    if ( this.client_id ) { this.exit('exit'); return this.resp(this.selected); }
                    return Alert.message('Send to '+this.selected.length+' ?',yes => {
                        if ( !yes ) return;
                        this.resp(this.selected);
                        this.exit('exit');
                    })
                break;
                default:
                    console.log('What',type);
            }
        },
        toogleShow () {
			setTimeout(() => {
				this.show = !this.show;
				!this.show && ( this.background = false );
			},0);
		},
        backgroundClick ( e ) {
			!this.client_id && e.target.classList.contains('v-background') && setTimeout(() => this.show && this.exit('exit'),5);
        }
    }
}

</script>