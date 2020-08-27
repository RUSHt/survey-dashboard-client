<template>
	<div :class="['edit-form','v-alert-container',{ 'v-background': background },{ 'off-top': !show }]" @click="backgroundClick($event)">
		<div class="v-alert" :style="{ position: position || '', width: width+'px' }">
            <header><p>Edit Customer</p><div @click="exit('exit')" class="x"></div></header>
            
			<div class="edit-form-container">
                <div class="label">
                    <p>Name</p>
                    <input v-model="customer.name" />
                </div>
                <div class="label">
                    <p>Phone</p>
                    <input v-model="customer.phone" />
                </div>
                <div class="label">
                    <p>Email</p>
                    <input v-model="customer.email" />
                </div>
                <div class="label">
                    <p>Manager</p>
                    <input type="checkbox" v-model="customer.manager" />
                </div>
                <div class="label">
                    <p>Notes</p>
                    <textarea v-model="customer.notes" style="width: calc(100% - 15px);max-width: calc(100% - 15px);min-width: calc(100px - 15px);min-height: 95px;padding:5px;font-size: 16px;"></textarea>
                </div>
                <div class="label">
                    <p class="btn big" @click="customer.closed = !customer.closed" :style="{ 'background-color': customer.closed ? 'red' : 'green' }">{{ customer.closed ? 'CLOSED' : 'ACTIVE' }}</p>
                </div>
            </div>
			
			<div class="v-btns">
				<p class="btn del" @click="exit('delete')">delete</p>
				<p class="btn" @click="exit('save')">save</p>
			</div>	
		</div>
	</div>
</template>

<script>

var $el;

import Alert from '@/utils/Alert.js'
import WebSoc from '@/utils/WebSoc.js'
import makeMSISDN from '@/utils/makeMSISDN.js'

export default {
    props: {
        client_id: {
            default: ''
        },
        customer_id: {
            default: ''
        },
        background: {
            default: true
        },
        position: 'fixed',
        resp: {
            default: () => {}
        }
    },
    data () {
        return {
            db: '',
            width: 500,
            show: false,
            customer: {
                name: '',
                phone: '',
                notes: '',
                msisdn: '',
                closed: false,
                manager: false
            }
        }
    },
    mounted () {
        document.body.appendChild(this.$el);
        this.toogleShow();
        this.db = this.client_id ? this.client_id+'-customers' : 'jb-customers';
        this.customer_id &&  WebSoc.SEND('get',{ DB: this.db, _id: this.customer_id },customer => {
            customer.notes = customer.notes || '';
            customer.closed = customer.closed || false;
            //customer.manager = customer.manager || false;
            this.initialCustomer = JSON.stringify(customer);
            this.customer = customer;
        })
    },
    methods: {
        exit ( type ) {
            switch ( type ) {
                case 'exit':
                    this.toogleShow();
                    return setTimeout(() => this.$el.parentElement.removeChild(this.$el),350); 
                case 'save':
                    return this.save();
                break;
                case 'delete':
                    return Alert.yesno('Delete '+this.customer.name+' ?',yes => {
                        if ( !yes ) return;
                        WebSoc.SEND('delete',{ DB: this.db, _id: this.customer._id },resp => {
                            console.log('delete resp',resp);
                            this.exit('exit');
                        });                        
                    })

                default:
                    console.log('What',type);
            }
        },
        save () {
            if ( this.initialCustomer ) {
                var inital = JSON.parse(this.initialCustomer);
                var current = this.customer;
                var update = ['phone','name','notes','closed','email','manager'].reduce((prev,f) => {
                    if ( inital[f] != current[f] ) { prev[f] = current[f] }
                    return prev;
                },{})
                if ( update.phone ) {
                    update.msisdn = makeMSISDN(update.phone);
                }
                if ( update.closed ) {
                    update.closed = Date.now();
                }
                this.toogleShow();
                WebSoc.SEND('updateCustomer',{ _id: current._id, db: this.db, update },() => {
                    Alert.message('Updated '+current.name || current.phone);
                    this.exit('exit');
                })
            } else {
                this.customer.msisdn = makeMSISDN(this.customer.phone);
                WebSoc.SEND('addCustomer',{ customer: this.customer },() => {
                    console.log('done...');
                });
                this.exit('exit');
            }
        },
        toogleShow () {
			setTimeout(() => {
				this.show = !this.show;
				!this.show && ( this.background = false );
			},0);
		},
        backgroundClick ( e ) {
			e.target.classList.contains('v-background') && setTimeout(() => this.show && this.exit('exit'),5);
        }
    }
}

</script>