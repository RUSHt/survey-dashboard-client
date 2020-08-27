<template>
    <div>
        <transition name="ontop">
            <div v-if="!resettingPassword">
                <div :class="['v-alert pw',{ 'pw-off-top': !show }]">
                    <header><p>Logon</p><div class="x" @click="exit"></div></header>
                    <div>
                        <label>
                            <p>Username</p>
                            <input id="username" v-model="un" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input id="password" type="password" v-model="pw" @keydown="keyDown($event)"/>
                        </label>
                        <p @click="resetPassword(true)" class="td-ulb ta-r" style="margin: 10px 10px 10px 15px">new / reset password</p>
                    </div>
                    <div class="v-btns">
                        <p class="btn" @click="login">OK</p>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="ontop">
            <div v-if="resettingPassword && !waitingVerify" :class="['v-alert pw pw-reset',{ 'pw-off-top': !show }]">
                <header><p>Re-set Password</p><div class="x" @click="resetPassword(false)"></div></header>
                <div>
                    <label>
                        <p>Username</p>
                        <input v-model="un" />
                    </label>
                    <div style="float: left;width: calc(100% - 40px);border:1px solid #c0c0c0;margin:20px">
                        <label style="display: none;">
                            <p>Email</p>
                            <input v-model="email" />
                        </label>
                        <h2 class="reset" style="margin: 0px 0px 0px 120px;display: none;">OR</h2>
                        <label>
                            <p>Mobile</p>
                            <input v-model="mobile" />
                        </label>
                    </div>
                    <label>
                        <p>Password</p>
                        <input type="password" v-model="pw" @keydown="keyDown($event)"/>
                    </label>
                    <label>
                        <p>Confirm PW</p>
                        <input type="password" v-model="confirmpw" @keydown="keyDown($event)"/>
                    </label>
                </div>
                <div class="v-btns">
                    <p class="btn" @click="sendPasswordReset">OK</p>
                </div>
            </div>
        </transition>
        <transition name="ontop">
            <div v-if="waitingVerify">
                <Pending :state="verifyState" :message="pendingMessage" @exit="exitPending" />
            </div>
        </transition>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import Alert from '@/utils/Alert.js'
import prettyPhone from '@/utils/prettyPhone.js'
import makeMSISDN from '@/utils/makeMSISDN.js'

import Pending from '@/components/Pending.vue'

export default {
    components: {
        Pending
    },
    computed: {
        auth () { return this.$store.state.auth }
    },
    watch: {
        auth ( auth ) {
            auth && this.exit();
        } 
    },
    data () {
        return {
            show: false,
            un: '',
            pw: '',
            resettingPassword: false,
            waitingVerify: false,
            verifyState: false,
            confirmpw: '',
            email: '',
            mobile: '',
            pendingMessage: '',
        }
    },
    mounted () {
        setTimeout(() => {
            this.show = true;
        },50);
        if ( typeof this.$route.query.new != 'undefined' ) {
            this.resetPassword(true);
	    }
    },
    methods: {
        keyDown ( e ) { !this.resettingPassword && !e.shiftKey && [13,9].indexOf(e.keyCode) > -1 && this.login(); },
        exit () {
            this.show = false;
            setTimeout(() => {
                setTimeout(() => !this.auth && setTimeout(() => this.show = true,300),300);
            },300)
        },
        login () {
            var { un, pw } = this;
            var that = this;
            this.show = false;
            if ( !un || !pw ) { return this.fail() };
            this.Auth({ 
                un, 
                pw,
                complete ( resp ) {
                    console.log('login complete',resp);
                    if ( resp.error ) { that.fail(resp.error)  }
                    if ( resp.auth ) { console.log('Success'); }
                } 
            });
        },
        resetPassword ( state ) {
            
            this.show = false;
            setTimeout(() => {
                this.resettingPassword = state;
                this.show = true;
            },300)
        },
        exitPending ( state ) {
            //console.log('exitPending this.auth',this.auth);
            this.waitingVerify = false;
            this.verifyState = false;
            this.resetPassword( false );
            return this.login();
            this.pw = '';
            this.un = '';
            //this.$router.push({ path: '/'});
        },
        sendPasswordReset () {
            
            var { pw, confirmpw, un, email, mobile } = this;
            if ( mobile ) {
                this.prettyPhone = prettyPhone(mobile);
                this.msisdn = makeMSISDN(mobile)
            }
            if ( !un ) return Alert.error('No Username supplied');
            if ( !mobile ) return Alert.error('You must provide a mobile number');
            if ( !pw ) return Alert.error('You must provide a password');
            if ( confirmpw != pw ) return Alert.error('Passwords do not match');
            var that = this;
            
            this.newPassword({
                un, pw, email, mobile, prettyPhone: this.prettyPhone, msisdn: this.msisdn,
                complete (resp) {
                    var pendingMessage;
                    if ( resp.error ) return Alert.error(resp.error);
                    that.resettingPassword = false;
                    if ( resp.text ) pendingMessage = 'A Verification Text has been sent to<br>'+resp.text;
                    if ( resp.email ) pendingMessage = 'A Verification eMail has been sent to<br>'+resp.email;
                    if ( pendingMessage ) {
                        setTimeout(() => {
                            that.pendingMessage = pendingMessage;
                            that.verifyState = false;
                            that.waitingVerify = true;
                        },100);
                    }
                    if ( resp.verify ) { that.verifyState = true; }
                }
            })

        },
        fail ( message ) {
            setTimeout(() => {
                this.un = '';
                this.pw = '';
                this.show = true;
            });
        },
        ...mapActions([
            'setValue',
            'Auth',
            'newPassword'
        ])
    }
}

</script>

<style>

</style>