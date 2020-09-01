<template>
  <div id="app">
    <Verify v-if="verify" />
    <Auth v-if="!verify && !auth" />
    <div v-if="!verify && auth">
      <div class="nav"><p>Survey Page Editor</p></div>
      <router-view/>
    </div>
  </div>
</template>

<script>

import Auth from '@/components/Auth.vue'
import { mapActions } from 'vuex';
import Verify from '@/views/Verify.vue'

export default {
  components: {
    Auth,
    Verify
  },
  computed: {
    auth () { return this.$store.state.auth },
    
  },
  data () {
    return {
        verify: false,
        fonts: 'Poppins|Roboto|Oswald|Arial|Lobster|Pacifico|Satisfy|Bangers|Audiowide|Sacramento|Open Sans'.split('|')
    }
  },
  mounted () {
    if ( this.$route.query.verify ) {
		this.verify = true;
    }
    var link = document.createElement('link');
        link.setAttribute('rel','stylesheet');
        link.setAttribute('type','text/css');
        var fontSizes = ':ital,wght@0,100;0,300;0,400;0,700;1,100;1,400;1,700';
        var fonts = 'https://fonts.googleapis.com/css2?'+this.fonts.map(f => 'family='+f+fontSizes).join('&');
        console.log('fonts',fonts);
            link.setAttribute('href',fonts);
        //document.head.appendChild(link);    
        this.initStore();
  },
  methods: {
    ...mapActions([
        'initStore'
    ])
  }
}

</script>

<style lang="scss">
html,body,p {
  margin: 0px;
  padding: 0px;
}  

.ellip {
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
} 

#app, .v-alert {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {

}

select {
    font-size: 18px;
    width: 310px;
    margin: 0px;
    height: 30px;
}

p.btn.big {
    width: calc(100% - 15px);
    margin: 7px 2px;
    padding: 10px 0px;
}

.td-ulb {
    color: blue;
    text-decoration: underline;
}

p.ml-10 {
    margin-left: 10px !important;
}

.arpr-10 {
    text-align: right;
    padding-right: 10px;
}

.ta-c {
    text-align: center;
}

.list-container .list-grid.list-totals {
    padding: 10px 5px;
    border: 1px solid #c0c0c0;
    border-bottom: 0px;
    border-right: 0px;
    border-left: 0px;
    background-color: white;
    &:nth-child(odd) { background-color: white; }
}

.ta-r {
    text-align: right;
}
.a-btn {
    &:active { transform: translate(2px,2px) }
}
h2.reset {
    text-align: center;
    margin-left: 140px;
}

.v-alert {
  position: fixed;
   margin-bottom: 100px;
	width: 370px;
	left: 50%;
	margin-left: -191px;
	background-color: white;
	border: 1px solid #c0c0c0;
	transition: transform 0.35s;
	transform: translateY(0px);
	z-index: 100;
	top: 150px;
	z-index: 10;  
	p, input { font-size: 16px }

  header {
		border-right: 1px solid #c0c0c0;
		border-bottom: 1px solid #c0c0c0;

		p {
			color: black;
			line-height: 38px;
			text-align: left;
			margin-left: 10px;
			width: calc(100% - 60px);
		}
	}
	.v-btns {
		width: 100%;
		float: left;
		border-top: 1px solid #c0c0c0;
		p:nth-child(1) { float: left };
		p:last-child { float: right; }
		p.btn { line-height: 2; font-size: 17px; }
	}
	.message { margin: 20px; width: calc(100% - 40px); text-align: center; float: left; font-size: 17px; line-height: 1.5; }
	input { font-size: 16px; margin: 0px 0px 20px 65px; padding: 5px; width: calc(100% - 130px); }
	.label {
		margin: 10px;
		input { width: calc(100% - 22px); margin: 0px; }
	}
    label {
        width: calc(100% - 20px);
        float: left;
        margin: 10px 10px 5px 10px;
        p { font-size: 16px; margin: 9px 5px; width: 120px; float: left; }
		> p:nth-child(2) { 
			width: calc(100% - 143px); height: 30px; background-color: rgba(200,200,200,0.4); border: 1px solid #c0c0c0; margin-top: 0px; 
			span {
				margin-left: 5px;
				line-height: 30px;
			}
		}
    input { float: right; width: calc(100% - 150px); margin: 0px; font-size: 16px; }
		textarea {
			width: calc(100% - 147px);
			padding: 5px;
			font-size: 16px;
			margin: 5px 0px 5px 5px;
			min-width: calc(100% - 147px);
			max-width: calc(100% - 147px);
			min-height: 60px;
    	}
    }
}

div.x { position: absolute; right: -3px; top: 0px; width: 42px; height: 42px; }
div.x:before,div.x:after { content: ''; width: 40px; height: 2px; background-color: rgba(0,0,0,0.4); position: absolute; top: 18px; }
div.x:before { transform: rotate(45deg); }
div.x:after { transform: rotate(-45deg); }

.v-alert.pw {
    transition: transform 0.3s;
    transform: translateY(0px);
}  
.v-alert.pw.pw-reset {
    width: 500px;
    margin-left: -250px;
}  
.v-alert.pw.pw-off-top {
    transform: translateY(-1000px);
} 
.ontop-enter-active, .ontop-leave-active {
    transition: transform 0.3s;
}
.ontop-enter-to {
    transform: translateY(0px);
}
.ontop-enter, .ontop-leave-to {
    transform: translateY(-500px);
}
.edit-container .editable-image-container {
    width: 440px;
    margin-top: 2px;
    min-height: 100px;
    float: left;
    position: relative;
    border: 1px solid #c0c0c0;
    img {
        width: 440px;
        float: left;
    }
    .image-editor {
        position: absolute;
        top: 0px;
        height: calc(100% - 20px);
        width: 100%;
        left: 0px;
    }
}    
  
.get-guid {
    background-color: grey;
    float: left;
    width: 18px !important;
    height: 18px;
    padding: 6px 4px 4px 6px;
    position: relative;
    border-radius: 5px;
    margin: 1px 10px;
    &:active { transform: trnaslate(2px,2px); }
} 
.copied {
    position: relative;
    &:after {
        content: '';
        position: absolute;
        top: 6px;
        left: calc(100% - 62px);
        width: 60px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAgCAMAAABKDfSpAAAAWlBMVEUAAADExMTExMS/v7/ExMTExMTFxcW/v7/ExMTGxsbCwsLExMQ7Ozuzs7NdXV1MTExvb29DQ0O8vLyAgIBubm53d3eioqKZmZmIiIiRkZGqqqpmZmZUVFRVVVUkK6FuAAAAC3RSTlMA778gcIDfEJ9voFLCzbAAAAG+SURBVEjHtZbdkoMgDIXVatvdJCAqgj99/9fcBGW2Y3uBM3JuDIf4mYkoFLseTXWHK1RW9a14162CK/V8o/+UcK3KOqIbuF7NXjXkUB16XUIOldLzJ+RRxWVDLj2K+gJK7765TXF2Zev108MWwKvPppx9k4v6zm7x6N4LOK1UNnxjd34YphCNdrCjOP08stdx6MMMjzzFDEpnkzZqQc2gHk2rsWcL2Xvhiz0tPbEoGQx3yL5OZw84A8yMJFwCZxQ2yaP6jT2hByBjeRT8dLZkcq5lKkk/TAvEVJZRG1vpkGFgxOlUv6XiTcqAaNWRvZiNjWZgaQSPY2TbNLaPbB0vkY2RrYKYTZHdmwQ2od2jVtKFFtlq3dgmrvEJXWTPLqXfq9qJPtw5ot+fR9ju/TYkQ4IOh+izEtgOl3G28pZWM81OlgIh8grXSBubjHbkJLJoR6e3b777YN8/4ZNGNFIyDYioSCobXuxNsLGB9D7RDWx7w+wF6YApv/+rKOZ11IUx9jH8nzgGR0iVtlkK+7Tq4gGQiX0rkn7gXetOo5+Z9+KihhyqM599RHWuM5vo9nspujqcZOvqmuLvVfPYmX+9J4AJGByyHQAAAABJRU5ErkJggg==');
    }
} 
.copy-icon {
    background-image: url('/copy-icon.png');
    background-size: contain;
    width: 30px !important;
    height: 30px;
    float: left;
    background-color: white;
    position: absolute;
    right: 7px; 
    bottom: 7px;
}  
.edit-container {
    float: left;
    width: calc(100% - 20px);
    border: 1px solid #c0c0c0;
    position: relative;
    margin: 10px;
    header {
        border-bottom: 1px solid #c0c0c0;
        float: left;
        width: 100%;
        p { margin: 7px; float: left; font-size: 20px; }
    }
    > .tickets {
        float: left;
        width: calc(100% - 40px);
        margin: 10px;
        border: 1px solid #c0c0c0;
        padding: 10px;
        p.btn.add-class { margin-left: 145px; }
    }
    label,.label {
        width: calc(100% - 10px);
        float: left;
        margin: 10px 5px;
        position: relative;
        > p { width: 140px; float: left; font-size: 18px; margin: 5px 0px; text-align: left; }
        > p.copied:after {
            position: absolute;
            top: -25px;
        }
        input { float: left; }
        > p:nth-child(2) { width: auto; }
        input,textarea { width: calc(100% - 150px); font-size: 18px; padding: 3px; }
        > span { font-size: 14px; margin: 0px 0px 0px 10px; }
        > span.info { margin-top: 8px; float: left;  }
        &.image-label { width: 590px; }
        &.event-capacity {
            p { width: 235px; margin-right: 20px; span:nth-child(1) { float: right; text-align: right; width: 80px; background-color: whitesmoke; padding: 5px; border: 1px solid #c0c0c0; position: relative; top: -5px; left: -5px; } }
        }
        &.ticket {
            width: 500px;
            float: left;
            margin: 0px 10000px 0px 140px; 
            &.header {
                margin: 0px 10000px 0px 140px; 
            }
        }
        &.link {
            input {
                float: left;
                width: 180px;
                margin-top: -1px;
            }
            p.verify-error {
                color: red;
                font-size: 14px;
                width: 300px;
                margin: 7px 0px;
            }
        }
        > div {
            &.copy-icon {
                position: relative;
                margin: 5px;
                left: 10px;
            }
            width: calc(100% + 280px);
            float: left;
            &.class-container { 
                width: 500px; position: relative; 
                float: left;
                > p:nth-child(2) { margin-left: 15px; }
                .x { transform: scale(0.5); position: relative; left: 0px; }
                > * {
                    float: left;
                    &:nth-child(1) { width: 200px; margin: 5px; }
                    &:nth-child(2) { width: 100px; margin: 5px; }            
                }
                
            }
        }
        textarea { min-height: 100px; }
        input.sm-1 { width: 100px; }
        input.sm-2 { width: 200px; }
        input.sm-3 { width: 300px; }
        input.sm-35 { width: 350px; }
        input.sm-4 { width: 400px; }
        input.sm-5 { width: 500px; }
        
    }
    .ck.ck-editor__editable_inline {
        padding: 0px;
    }
    .ck.ck-editor__main {
        p,h1,h2,h3,h4,h5,h8 { padding: 5px; }
        strong { font-weight: 600; }
    }
}
p.btn {
    font-size: 15px;
    line-height: 2;
    width: 120px;
    text-align: center;
    margin: 5px;
    float: left;
    background-color: rgb(0, 123, 200);
	  color: white;
	  text-align: center !important;
    &:active { transform: translate(2px,2px) }
	  &.del {
      background-color: rgba(0,0,0,0);
      color: red;
      text-decoration: underline;
	  }
    &.gr {
      background-color: grey;
    }
}
.btns {
    float: left;
    width: 100%;
    border-top: 1px solid #c0c0c0;    
    p.btn:last-child { float: right; }

}
input,textarea,div#editor .ql-editor * {
    font-family: sans-serif !important;
}
.on-top-enter-active,.on-top-leave-active {
	transform: translateY(0px);
	
}
.on-top-enter,.on-top-leave-to {
	transform: translateY(-1000px);	
}
input[type=checkbox] {
    width: 25px !important;
    height: 25px;
    box-sizing: border-box;
    -webkit-appearance: none;
    border: 1px solid #c0c0c0;
    &:checked {
        background-size: contain;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAg0lEQVR4Ae3QvQ2CMRRD0dtRMk74W4zOa7HBNw6EAYKQqHgSDTFC4Js6x9IjpZQ+3YGjl78ykJe/P3n5MhB+H/53+f61/JoTzckvDM40D79ieXy90Dy3F+PFxO5Nvkxs5vN1YjZfJrbz+Toxly8T3cA/TVj4OiEMycSXCWFMiL8upXQDujO26ouV5ZIAAAAASUVORK5CYII=);
    }
    &:focus {
        outline: none;
    }
}

.list-container {
    width: calc(100% - 20px);
    margin: 10px;
    border: 1px solid #c0c0c0;
    position: relative;
    float: left;
    .list-header {
        border-bottom: 1px solid #c0c0c0;
        p { font-size: 20px; text-align: center; line-height: 34px; padding-top: 4px; }
    }
    p { font-size: 14px; }
    .list-grid {
        display: grid;
        padding: 5px;
        &.list-row > div {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
        }
        p { width: 95%; min-height: 13px; float: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    }
    .search {
        border-bottom: 1px solid #c0c0c0;  
        input { width: calc(100% - 20px); padding: 5px; font-size: 20px; }
    }
    .list-row {
        &:nth-child(odd) { background-color: rgba(100,100,100,0.2) }
    }
}

</style>
