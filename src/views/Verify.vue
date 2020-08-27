<template>
    <div class="verify-client">
        <Pending :state="verifySuccess" :message="'Confirming Verification'" @exit="exitVerify"/>
    </div>
</template>

<script>

import WebSoc from '@/utils/WebSoc.js'
import Alert from '@/utils/Alert.js'
import Pending from '@/components/Pending.vue'

export default {
    components: {
        Pending
    },
    data () {
        return {
            verifySuccess: false
        }
    },    
    mounted () {
        WebSoc.SEND({ t: 'verify', data: { verify: this.$route.query.verify }},resp => {
            if ( resp.error ) return Alert.error(resp.error); 
            this.verifySuccess = true;
        })

    },
    methods: {
        exitVerify () {
            this.$router.replace({ query: {} });
            this.$router.go('/');
        }
    }
}

</script>

<style>

</style>