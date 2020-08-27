<template>
    <div>
        <div class="ad-img" style="transform:scale(0.7);transform-origin: 0px 0px;">
            <div :class="['loyalty-ad-container',{ rotate: page.rotated }]">
                <div class="front-box" style="position: relative;">    
                    <img class="loyalty-ad" :src="page.background" style="position: relative" />

                    <div class="page-state-btns">
                        <p class="page-state-btns-btn issued" v-if="page.issued > 0">{{ page.issued.toLocaleString() }}</p>
                        <p class="page-state-btns-btn redeemed" v-if="page.redeemed > 0">{{ page.redeemed.toLocaleString() }}</p>
                    </div>

                    <div class="btns" :style="btnsStyle">
                        <div @click="btnClick(page,btn,$event)" v-for="btn in page.btns.filter(b => !b.reverse)" :class="['btn',{ selected: btn.selected },'type-'+btn.content.action]" :style="btn.content.style+';font-size:28px;display:flex;align-items:center;justify-content:space-around;'+( page.styleButton ? (';background-color:'+campaign.buttonColor+';color:'+campaign.buttonFontColor) : '')">
                            <a v-if="btn.content.type == 'phone'" :href="'tel:'+btn.content.value"></a>
                            <img v-if="btn.type == 'gif'" :src="btn.content.gif" :style="btn.content.style" />
                        </div>
                    </div>
                </div>
                <div class="back-box">
                    <img class="loyalty-ad" :src="page.backFaceImage" />
                    <div class="btns" :style="btnsStyle">
                        <div @click="btnClick(page,btn,$event)" v-for="btn in page.btns.filter(b => b.reverse)" :class="['btn',{ selected: btn.selected },'type-'+btn.content.action]" :style="btn.content.style+';font-size:28px;display:flex;align-items:center;justify-content:space-around;'+( page.styleButton ? (';background-color:'+campaign.buttonColor+';color:'+campaign.buttonFontColor) : '')">
                            <img class="qr-btn" v-if="btn.type == 'qr'" src="https://api.survey-vip.com/qr?id=httpsasdfsadfsadfasdfsomerandomdataorother" />
                            <img v-if="btn.type == 'gif'" :src="btn.content.gif" :style="btn.content.style" />
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'voucher',
    props: ['voucher'],
    data () {
        return {
            btnsStyle: '',
            page: {}
        }
    },
    created () {
        this.page = this.voucher;
        console.log('remvoed',this.page.removed);
    },
    mounted () {

    },
    methods: {
        btnClick( page, btn, e ) {
            e.stopPropagation();
            e.preventDefault();
            var action = btn.content.action;
            action == 'rotate' && ( page.rotated = !page.rotated);
        }
    }
}

</script>

<style lang="scss">
.page-state-btns {
    position: absolute;
    bottom: 0px;
    left: 0px;
    p.page-state-btns-btn {
        position: relative;
        border-top-left-radius: 5px;
        padding: 0px 3px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        text-align: center;
        min-width: 40px;
        margin-left: 10px;
        color: white;
        margin-top: 10px;
        font-size: 20px;
        &.issued {
            background-color: green; /* #00D000; */
            color: white;
            font-size: 24px;
        }
        &.redeemed {
            background-color: tomato; /* #c23c24; */
            color: black;
        }
    }
}
div.loyalty-ad-container {
    position: relative;
    transition: transform 1s;
    -webkit-perspective: 1000;
    transform-style: preserve-3d;
    perspective: 1000;
    -webkit-transform:translate3d(0,0,0);
    float: left;
    width: calc(100% - 10px);
    margin: 5px 0px 0px 5px;
    img.sizer {
        width: 100%;
        margin: 0px;
        z-index: -1;
        opacity: 0;
    }
    .front-box,.back-box {
        float: left;
        opacity: 1;
        position: absolute;
        width: 100%;
        margin: 0px;
        top: 0px;
        left: 0px;
        backface-visibility: hidden;
        -webkit-transform:translate3d(0,0,0);
        transform-style: preserve-3d;
        perspective: 1000;
    }
    .front-box {
        z-index: 2;
    }
    .back-box {
        z-index: 1;
        transform: rotateY(180deg);
        position: absolute;
        left: 0px;
    }
    &.rotate {
        transform: rotateY(180deg);
    }
    img.loyalty-ad {
        width: 100%;
        position: absolute;
    }
    .btns {
        position: absolute;
        top: 0px;
        left: 0px;
        transform-origin: 0px 0px;
        .btn { position: absolute; background-color: rgba(200,0,200,0); &:active { transform: translate(0px,0px) } }
        .type-qr img { width: 100%; }
        .type-link a { position: absolute; width: 100%; height: 100%; }
    }
}    
.ad-img {
    width: 414px;
    margin: 10px;
    float: left;
    position: relative;
    border: 1px solid #c0c0c0;
    &:last-child { margin-bottom: 100px; }
    img { width: 100%; }
    .btns {
        position: absolute;
        width: 100%;
        bottom: 0px;
        background-color: white;
        color: red;
        background-color: rgba(200,200,200,0);
        p { width: 50%; height: 120px; background-color: rgba(200,0,0,0); float: left; margin: 0px; top: 0px; }
    }
    p { position: relative; top: -15px; }
    p:last-child { margin-bottom: -3px; }
}
</style>

