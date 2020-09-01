<template>
    <div class="nav">
        <div class="nav-btns">
            <p v-for="btn in navBtns" @click="action(btn.title)">{{ btn.title }}</p>
        </div>
    </div>
</template>

<script>

import WebSoc from '@/utils/WebSoc.js';    

export default {
    data () {
        return {
            navBtns: [
                { title: 'Find' },
                { title: 'List' }
            ]
        }
    },
    methods: {
        action ( type ) {
            this[type]();
        },
        Find () {
            console.log('Find...')
        },
        List () {
            WebSoc.SEND('getSurveys',{},resp => console.log('getSurceys resp',resp));
        }
    }
}

</script>

<style lang="scss">


</style>