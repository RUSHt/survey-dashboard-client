<template>
    <div class="verify-container v-alert">
        <header>
            <p>Account Verification Pending</p>
            <div class="x" @click="exit(false)"></div>
        </header>
        <p class="message" v-html="message"></p>
        <div :class="['verify-loader verify',{ 'success': state }]">
            <div class="loading">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div> 
            <div>
                <div class="success-tick"><div></div><div></div></div>
            </div>
            <div class="btns">
                <p class="btn" @click="exit(true)">OK</p>
            </div>
        </div>
    </div>
</template>

<script>

import Alert from '@/utils/Alert.js'

export default {
    props: ['state','message'],
    methods: {
        exit ( state ) {
            console.log('Pending exit',state);
            this.$emit('exit',state);
        }
    }

}

</script>

<style lang="scss">
.verify-container.v-alert {
    .message {
        margin: 10px;
        font-size: 20px;
        text-align: center;
    }
}    
.verify {
    .btns { display: none; }
    &.success {
        padding-bottom: 40px;
        .lds-ring {
            display: none;
        }
        .success-tick {
            display: inline;
        }
        .btns {
            display: inline;
            position: absolute;
            bottom: -20px;
            left: -130px;
        }
    }
}
.verify-loader {
    width: 100%;
    height: 120px;
    float: left;
    position: relative;
    margin-left: calc(50% - 55px);
    margin-bottom: 20px;
}
.lds-ring {
  position: absolute;
  display: inline-block;
  position: relative;
  width: 110px;
  height: 110px;
  margin-top: 0px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 117px;
  height: 117px;
  border: 15px solid green;
  margin: 2px;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: green transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.success-tick {
 width: 100px;
 height: 100px;
 border: 10px solid green;
 border-radius: 50%;
 position: relative;
 float: left;
 top: 0px;
 display: none;
}
.success-tick div:nth-child(1) {
 width: 45%; 
 height: 10%;
 background-color: green;
 position: absolute;
 transform: rotate(45deg);
 transform-origin: 0px 0px;
 top: 42%;  
 left: 12%;
 animation: left 1s;
}
.success-tick div:nth-child(2) {
 width: 70%; 
 height: 10%;
 background-color: green;
 position: absolute;  
 transform: rotate(-45deg);
 transform-origin: 0px 0px;
 top: 72%;
 left: 32%;
 animation: right 1s;
}
@keyframes left {
 0% { width:  0% }
 50% { width: 45% }
 100% { width: 45% }
}

@keyframes right {
 0% { width: 0% }
 30% { width: 0% }
 100% { width: 70% }
}
</style>