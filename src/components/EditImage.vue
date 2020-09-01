<template>
    <div>
        <link href="https://s3-us-west-2.amazonaws.com/test.rsjs.io/cropper.min.css" rel="stylesheet">
        <div class="v-alert edit-image">
            <header><p>Edit Image</p><div class="x" @click="exit()"></div></header>
            <div class="source">
                <img />
            </div>
            <div class="sample">
                <canvas></canvas>
            </div>
            <div class="v-btns">
                <p class="btn b" @click="saveImage">save</p>
            </div>
        </div>
    </div>
</template> 

<script>

import Cropper from 'cropperjs'
import Vue from 'vue'

export default {
    props: {
        resp: {
            default: () => console.log('No resp editImage')
        },
        base64: {
            default: () => { return '' }
        }
    },
    data () {
        return {
            show: true
        }
    },
    mounted () {
        this.$el.style.opacity = 0;
        document.body.appendChild(this.$el);
        this.showCropper()
    },
    methods: {
        showCropper () {
            
            Vue.nextTick(() => {
                
                var img = this.$el.querySelector('img');
                this.canvas = this.$el.querySelector('canvas');
                setTimeout(() => this.$el.style.opacity = 1,700);
                img.onload = () => { 
                    var updatedCanvas;
                    this.cropper = new Cropper(img,{
                        autoCropArea: 1,
                        crop: (e) => {  
                            var updatedCanvas = this.cropper.getCroppedCanvas({ width: this.width, height: this.height });
                            this.canvas.parentElement.replaceChild(updatedCanvas,this.canvas)
                            this.canvas = updatedCanvas;
                        }
                    }) 
                }

                img.src = this.base64;

            }); 

        },
        exit () {
            this.show = false;
            setTimeout(() => {
                this.$el.parentElement.removeChild(this.$el)
            },0);
        },
        saveImage () {
            this.exit();
            var img = document.createElement('img');
                img.onload = () => {
                    this.resp({ src: img.src, width: img.width, height: img.height })
                }
                img.src = this.canvas.toDataURL()
        }
    }
}

</script>

<style lang="scss">
.v-alert.edit-image {
    width: 1200px;
    margin-left: -600px;
    height: 828px;
    .source { 
        width: calc(50% - 22px);
        float: left;
        margin: 10px;
        border: 1px solid #c0c0c0;
        display: flex;
        justify-content: center;
        align-items: center;
        img { max-width: 100%; }
    }
    .sample {
        width: calc(50% - 22px);
        float: left;
        margin: 10px;
        border: 1px solid #c0c0c0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(/square-tile.png);
        height: calc(100% - 107px);
        canvas { max-width: 100%; background-color: rgba(100,100,100,0.6); }  
    }
    .v-btns {

    }
}
</style>