<template>
    <div class="body">
        <div class="content">
            <div class="resources">
                <p class="btn" @click="restore" style="display: none;">RESTORE</p>
                <p class="btn" @click="addRect" style="float: left;">ADD RECT</p>
                <p class="btn" @click="addText" style="float: left;">ADD TEXT</p>
                <p class="btn" @click="addInput" style="float: left;">ADD INPUT</p>
                <p @click="addBtn(qty)" v-for="qty in [1,2,3,4,5,6]" class="btn">ADD {{ qty }} BTN</p>
                <p class="btn" @click="addBack" style="float: left;">ADD BACK</p>
                <p class="btn" @click="uploadImage" style="float: left;width: 250px;margin-left:5px">Upload Image</p>
                <div v-for="img in savedImgs" style="float: left;width: 255px;">
                    <img :src="img.src" style="max-width:calc(100% - 21px);border:1px solid #c0c0c0;margin: 10px" v-on:load="startListen($event.target)" draggable="true"/>
                </div>
            </div>
            <div class="canvas-box">
                <input v-if="page" v-model="page.title" />
                <canvas id="canvas" width="414" height="900" style="border: 5px solid red"></canvas>
            </div>
            <div class="settings">
                <div class="page-list">
                    <div v-for="Page in pages" style="position: relative;">
                        <p @click="selectPage(Page)" :style="{ backgroundColor: Page == page ? '#00FF00' : '', position: 'relative' }"><span>{{ Page.index+1 }}</span>{{ Page.title }}</p>
                        <div class="x" style="transform:scale(0.4) translateY(-22px)" @click="removePage(Page)"></div>
                    </div>
                    <p class="btn" @click="addPage" style="width: calc(50% - 2.5px);margin-left:0px;">ADD PAGE</p>
                    <p class="btn" @click="copyPage" style="width: calc(50% - 2.5px);margin-left:0px;margin-right: 0px;">COPY PAGE</p>
                </div>
                <div v-if="!selectedObject">
                    <div class="label">
                        <input v-model.number="page.height" @keyup="setHeight(page)" />
                        <p>Height</p>
                    </div>
                    <div class="label">
                        <select v-model="selectedFont"><option v-for="font in fonts">{{ font }}</option></select>
                        <p>Font</p>
                    </div>
                    <div class="label">
                        <input v-model="survey.backgroundColor" type="color" />
                        <p>{{ survey.backgroundColor }}</p>
                        <p>backgroundColor</p>
                    </div>    
                    <div class="label">
                        <input v-model="survey.color" type="color" />
                        <p>{{ survey.color }}</p>
                        <p>Font Color</p>
                        
                    </div>              
                    <div class="label">
                        <input v-model="survey.accentColor" type="color" />
                        <p>{{ survey.accentColor }}</p>
                        <p>Button Color</p>                        
                    </div>   
                    <div class="label">
                        <input v-model="survey.btnColor" type="color" />
                        <p>{{ survey.btnColor }}</p>
                        <p>Button Font Color</p>
                    </div>    
                </div>
                <div v-if="Array.isArray(selectedObject)">
                    <p v-if="selectedObject.length == 0">NO OBJECTS</p>
                    <div v-for="obj in selectedObject" style="border:1px solid #c0c0c0;margin:5px;float: left;padding:0px 10px;position: relative;">
                        <div class="x" @click="selectedObject = false" style="transform:scale(0.5) translate(15px,-15px)"></div>
                        <div class="label">
                            <p style="text-align: center;font-weight: bold;width: 100%;">{{ obj.type }}</p>
                            <div class="label">
                                <p style="width: 64px;">Top</p>
                                <input :value="obj.top.toFixed(0)" @keyup="updateObj(obj,'top',$event)" @keydown="updateObjKeyDown(obj,'top',$event)" />        
                            </div>
                            <div class="label">
                                <p style="width: 64px;">Left</p>
                                <input :value="obj.left.toFixed(0)" @keyup="updateObj(obj,'left',$event)"  @keydown="updateObjKeyDown(obj,'left',$event)" />
                            </div>
                            <div class="label">
                                <p style="width: 64px;">zIndex</p>
                                <input v-model="obj.zIndex" @keyup="updateObj(obj,'zIndex',$event)" @keydown="updateObjKeyDown(obj,'zIndex',$event)" />
                            </div>
                            <div v-if="obj.type == 'Input Box'">
                                <div class="label">
                                    <p style="width:64px">Height</p>
                                    <input v-model.number= "obj.settings.height" @keyup="updateObj(obj,'height',$event)" @keydown="updateObjKeyDown(obj,'height',$event)"/>
                                </div>
                            </div>
                            <div v-if="obj.type == 'Rectangle'">
                                <div class="label">
                                    <p style="width:64px">Height</p>
                                    <input :value="(obj.height * obj.scaleY).toFixed(0)" @keyup="updateObj(obj,'height',$event)" @keydown="updateObjKeyDown(obj,'height',$event)"/>
                                </div>                                
                                <div class="label">
                                    <p style="width:64px">Width</p>
                                    <input :value="(obj.width * obj.scaleX).toFixed(0)" @keyup="updateObj(obj,'width',$event)" @keydown="updateObjKeyDown(obj,'width',$event)"/>
                                </div>
                                <div class="label">
                                    <p style="width: 64px;">Color</p>
                                    <input :value="obj.fill" type="color" @input="updateObj(obj,'fill',$event)" />                                    
                                </div>
                            </div>
                            <div v-if="obj.type == 'Image'">
                                <div class="label">
                                    <p style="width:64px">Height</p>
                                    <input :value="(obj.height * obj.scaleY).toFixed(0)"  @keyup="updateObj(obj,'height',$event)" @keydown="updateObjKeyDown(obj,'height',$event)" />
                                </div>
                                <div class="label">
                                    <p style="width:64px">Width</p>
                                    <input :value="(obj.width * obj.scaleX).toFixed(0)"  @keyup="updateObj(obj,'width',$event)" @keydown="updateObjKeyDown(obj,'width',$event)"/>
                                </div>
                            </div>
                            <div v-if="obj.type == 'Text'">
                                <div class="label">
                                    <p style="width:64px">Size</p>
                                    <input :value="obj.fontSize" @keyup="updateObj(obj,'fontSize',$event)" />
                                </div>
                                <div class="label">
                                    <p style="width:64px">Height</p>
                                    <input :value="obj.lineHeight" @keyup="updateObj(obj,'lineHeight',$event)" />
                                </div>                                
                                <div class="label">
                                    <p style="width:64px">Weight</p>
                                    <input :value="obj.fontWeight" @keyup="updateObj(obj,'fontWeight',$event)" />
                                </div>
                                <div class="label">
                                    <p style="width: 64px;">Style</p>
                                    <select  @change="updateObj(obj,'fontStyle',$event)"><option v-model="obj.fontStyle" v-for="fStyle in ['normal','italic','oblique']">{{ fStyle }}</option></select>
                                </div>
                                
                            </div>
                            <div v-if="obj.type == 'Button Group'">
                                <div class="label">
                                    <p style="width: 64px;">Height</p>
                                    <input v-model.number="obj.settings.height" @keyup="updateBtnKeyUp(obj,'height',$event)" @keydown="updateBtnKeyDown(obj,'height',$event)"/>
                                </div>
                                <div class="label">
                                    <p style="width: 64px;">Width</p>
                                    <input v-model.number="obj.settings.width" @keyup="updateBtnKeyUp(obj,'width',$event)" @keydown="updateBtnKeyDown(obj,'width',$event)"/>
                                </div>                                
                                <div class="label">
                                    <p style="width: 64px;">Gap</p>
                                    <input v-model.number="obj.settings.gap" @keyup="updateBtnKeyUp(obj,'gap',$event)" @keydown="updateBtnKeyDown(obj,'gap',$event)"/>
                                </div>
                                <div class="label">
                                    <p style="width:64px">Fnt Size</p>
                                    <input v-model.number= "obj.settings.fontSize" @keyup="updateBtnKeyUp(obj,'fontSize',$event)" @keydown="updateBtnKeyDown(obj,'fontSize',$event)"/>
                                    <p style="width: 75px;margin-left: 18px;">Apply All</p><input type="checkbox" v-model="applyAll" />
                                </div>
                            </div>
                        </div>
                        <div class="label" v-if="typeof obj.text == 'string'">
                            <p>Text Content</p>
                            <textarea :value="obj.text" @keyup="setText(obj,$event.target.value)" style="width: calc(100% - 10px);min-height:100px;font-size:18px"></textarea>
                        </div>
                        <div v-if="obj.type == 'Button Group'">
                            <div v-for="(obj,index) in obj._objects" class="label" v-if="typeof obj.text != 'undefined'">
                                <p style="margin-top: 6px;">Button {{ obj.btnCount }}</p>
                                <input style="float: right;width: 240px;" :value="obj.text.split('\n').join('/')" @keyup="setText(obj,$event.target.value,obj.btnCount - 1)" />
                            </div>
                        </div>
                        <p class="btn" @click="removeObject(obj)" style="width: 100%;margin: 0px;margin-bottom: 10px;">REMOVE OBJECT</p>
                    </div>
                </div>                         
            </div>
        </div>
    </div>
</template>

<script>

import { fabric } from "fabric";

import FontFaceObserver from 'fontfaceobserver'
import UploadFile from '@/utils/UploadFile.js'
import EditImage from '@/utils/EditImage.js'

import postMinify from '@/utils/postMinify.js'

export default {
    data () {
        return {
            fonts: ["Open Sans","Poppins", "Roboto", "Oswald", "Lobster", "Pacifico", "Satisfy", "Bangers", "Audiowide", "Sacramento"],
            selectedFont: "Open Sans",
            canvas: false,
            width: 414,
            height: 900,
            rects: [],
            texts: [],
            imgs: [],
            btns: [],
            pages: [],
            inputs: [],
            backs: [],
            page: false,
            selectedObject: false,
            applyAll: false,
            fields: [],
            types: [
                { t: 'btns', type: 'Button Group', fill: '', fontFamily: '', fontSize: 20, fontWeight: 100, charSpacing: 30, top: 150, height: 50, gap: 25, width: 320, btnText: [] },
                { t: 'texts', type: 'Text', color: '', backgroundColor: '', fontFamily: '', fontSize: 20, width: 320, top: 120, fontWeight: 100, charSpacing: 30, lineHeight: 1.5 },
                { t: 'imgs', type: 'Image', src: '' },
                { t: 'rects', type: 'Rectangle', top: 10, left: 10, width: 320, height: 50, scaleX: 1, scaleY: 1 },
                { t: 'inputs', type: 'Input Box', top: 50, width: 320, height: 50, backgroundColor: '#FFFFFF' },
                { t: 'backs', type: 'Back Button', top: 10, left: 10 }
            ],
            survey: {
                backgroundColor: '#FFFFFF',
                color: '#00FF00',
                accentColor: '#000000',
                btnColor: '#FFFF00',
                rectColor: '#FF0000',
                inputColor: '#FFFFFF'
            },
            savedImgs: [],
            savePages: {},
            saveSurvey: {}
        }
    },
    watch: {
        'survey.backgroundColor' (newVal) {
            this.changeColor('backgroundColor',newVal);
        }, 
        'survey.accentColor' (newVal) {
            this.changeColor('accentColor',newVal)
        },
        'survey.color' (newVal) {
            this.changeColor('color',newVal)
        },
        'survey.btnColor' ( newVal ) {
            this.changeColor('btnColor',newVal);
        },
        page ( page ) {
            this.updatePage(page);
        },
        selectedFont ( font ) {
            this.changeFont(font);
        },
        applyAll ( applyAll ) {
            applyAll && console.log('Apply All');
        },
        selectedObject ( selectedObj ) {
            !selectedObj && this.canvas.discardActiveObject().renderAll();
        } 
    },
    created () {
        this.fields = this.types.map(t => t.t);
    },
    mounted () {	
        this.changeFont(this.selectedFont);
        this.setCanvas();
        this.addPage();
        this.watch();
    },
    methods: {
        restore () {
            this.pages = [];
            this.survey = JSON.parse(localStorage.saveSurvey);
            Object.keys(this.savePages).forEach(key => {
                var page;
                this.pages.push(page = JSON.parse(JSON.stringify(this.savePages[key])));
                console.log('restore page',key,JSON.parse(JSON.stringify(page)));
                this.fields.forEach(field => {
                    page[field].forEach((obj,i) => {
                        switch ( obj.type ) {
                            case 'Text':
                                var text = this.makeText(obj,obj.text);
                                page[field][i] = text;
                            break;
                            case 'Input Box':
                                var input = this.makeInput(obj);
                                page[field][i] = input;
                            break;
                            case 'Button Group':
                                console.log('Button Group',key,obj.top);
                                var btns = this.makeBtnGroup(obj,obj.btnText);
                                page[field][i] = btns;
                            break;
                            case 'Back Button':
                                var back = this.makeBack(obj);
                                page[field][i] = back;
                            break;
                            case 'Image':
                                var img = this.makeImage(obj,obj.src,img => {
                                    page[field][i] = img;
                                });
                            break;
                            case 'Rectangle':
                                var rect = this.makeRect(obj);
                                page[field][i] = rect;
                                console.log('Page '+key,i,field,rect);
                            break;    
                        }
                    })
                })
            })
            this.pages.sort((a,b) => a.index < b.index ? -1 :1);
            setTimeout(() => {
                this.selectPage(this.pages[0]);
            },1000)
        },
        watch () {
            var savePages = this.savePages;
            var saveSurvey = this.saveSurvey;
            var fields = this.fields;
            var pages = this.pages;
            setInterval(() => {
                var update = false;
                if ( JSON.stringify(this.saveSurvey) != JSON.stringify(this.survey) ) {
                    this.saveSurvey = JSON.parse(localStorage.saveSurvey = JSON.stringify(this.survey));
                    console.log('saveSurvey');
                }
                this.pages.forEach((page,i) => {
                    var pageState = savePage(page);
                        pageState.index = i;
                    if ( !savePages[i] ) {
                            savePages[i] = pageState;
                            console.log('add Page');
                            update = true;
                    }
                    if ( JSON.stringify(pageState) != JSON.stringify(savePages[i]) ) {
                        savePages[i] = pageState;
                        console.log('update page',pageState.index,pageState.title,JSON.parse(JSON.stringify(pageState)));
                        update = true;
                    } else {
                        
                    }
                })
                if ( !update ) console.log('All OK');
            },5000);

            function savePage(page) {
                var savePage = fields.reduce((p,field) => { p[field] = []; return p },{});
                            savePage.title = page.title;
                            savePage.width = page.width;
                            savePage.height = page.height;
                            fields.forEach(field => {
                                page[field].forEach(obj => {
                                    var Obj = obj.settings;
                                        Obj.type = obj.type;
                                    switch ( obj.type ) {
                                        case 'Image':
                                            Obj.src = obj._element.src;
                                        break;
                                        case 'Text':
                                            Obj.text = obj.text;
                                        break;
                                        case 'Button Group':
                                            Obj.btnText = obj._objects.filter(o => o.text).map(o => o.text);
                                        break;            
                                    }
                                    savePage[field].push(Obj)
                                });
                            });
                return savePage;                            
            }
        },
        startListen ( img ) {
            img.addEventListener('dragstart',e => { e.dataTransfer.setData('text/plain',[this.savedImgs.findIndex(s => s.src == img.src),e.offsetX,e.offsetY,getComputedStyle(e.target).width,getComputedStyle(e.target).height].join(':')); })
        },
        updateBtnKeyDown ( obj, field, e ) {
            var keyCode = e.keyCode;
            var index = [40,38].indexOf(keyCode);
            if ( index == -1 ) return;
            if ( index == 0 ) index -= 1;
            var type = this.types.find(t => t.type == 'Button Group');
            var value = parseInt(e.target.value);
            if ( isNaN(value) ) return;
            obj.settings[field] += index;
            this.updateBtn( obj );
        },
        updateBtnKeyUp ( obj, field, e ) {
            var type = this.types.find(t => t.type == 'Button Group');
            var value = parseInt(e.target.value);
            if ( isNaN(value) ) return; 
            this.updateBtn( obj );
        },
        makeBtnGroup ( settings, btnText ) {
            var type = this.types.find(t => t.type == 'Button Group');

            var top = settings.top;
            var height = settings.height;
            var gap = settings.gap;
            var width = settings.width
            var fontSize = settings.fontSize;
            var zIndex = settings.zIndex;

            var left = (this.canvas.width - width ) / 2;

            var group = new fabric.Group();

            new Array(btnText.length).fill(true).forEach((_,i) => {
                var rect = new fabric.Rect({
                    top : top+(i * ( height + gap)),
                    left : left,
                    width : width,
                    height : height,
                    rx: 10,
                    ry: 10,
                    fill : this.survey.btnColor,
                    type: 'Button',          
                }); 
                var btn = new fabric.IText(btnText[i],{
                    btnCount: (i + 1),
                    fontFamily: this.selectedFont,
                    fontSize,
                    width: width,
                    originX: 'center',
                    originY: 'center',
                    top: top+(height / 2)+(i * ( height + gap )),
                    left: (width / 2 ) + left,
                    lineHeight: 1,
                    charSpacing: 30,
                    fontWeight: 100,
                    textAlign: 'center',
                    fill: this.survey.accentColor
                }); 
                [rect,btn].forEach(obj => {
                    group.addWithUpdate(obj);
                });             
            })
            group.zIndex = zIndex;
            group.type = 'Button Group';
            group.settings = {
                top: group.top,
                width,
                height,
                gap,
                zIndex,
                fontSize
            };
            return group;

        },
        updateBtn ( obj ) {
            var group = this.makeBtnGroup(obj.settings,obj._objects.filter(o => o.text).map(o => o.text));
            this.canvas.remove(obj);
            this.canvas.add(group);
            this.btns.splice(this.btns.indexOf(obj),1,group);
            this.canvas.renderAll();
            this.selectObject([ group ]);
            if ( this.applyAll ) {
                clearTimeout(this._updateBtn);
                this._updateBtn = setTimeout(() => {
                    var type = this.types.find(t => t.type == 'Button Group');
                    Object.keys(obj.settings).forEach(key => {
                        console.log('key',obj.setting[key]);
                        type[key] = obj.settings[key]
                    });
                    this.pages.forEach(page => {
                        page.btns.forEach((Obj,i) => {
                            if ( Obj == obj ) return;
                            page.btns.splice(page.btns.indexOf(Obj),1,this.makeBtnGroup(obj.settings,Obj._objects.filter(o => o.text).map(o => o.text)))
                        })
                    })
                },1500);
            }
        },
        updateObjKeyDown ( obj, field, e ) {
            
            var keyCode = e.keyCode;
            var value = parseFloat(e.target.value);
            if ( isNaN(value) ) return;
            var dir = [40,38].indexOf(e.keyCode)

            if ( dir == -1 ) return;

            if  ( dir == 0 ) dir = -1;

            if ( obj.type == 'Image' && ['width','height'].indexOf(field) > - 1 ) {
                switch ( field ) {
                    case 'width': 
                        var scaleX = ( ( value + dir ) / obj.width );
                        var scaleY = scaleX;
                    break;
                    case 'height':
                        var scaleY = ( ( value + dir ) / obj.height );
                        var scaleX = scaleY;
                    break;         
                }
                obj.set({ scaleX, scaleY }); 
                obj.settings.scaleX = scaleX;
                obj.settings.scaleY = scaleY;
                return this.canvas.renderAll();                
            }

            if ( obj.type == 'Rectangle' && ['width','height'].indexOf(field) > -1 ) {
                
                switch ( field ) {
                    case 'width':
                        var width = value + dir;
                        var height = obj.scaleY * obj.height;
                    break;
                    case 'height':
                        var width = obj.scaleX * obj.width;
                        var height = value + dir;
                    break;
                }
                obj.set({ scaleX: 1, scaleY: 1, width, height });
                obj.settings.scaleX = 1;
                obj.settings.scaleY = 1;
                obj.settings.width = width;
                obj.settings.height = height;
                return this.canvas.renderAll();

            }  
            obj.set({ [field]: value + dir });
            obj.settings[field] = value + dir;
            return this.canvas.renderAll();          

        },
        updateObj ( obj, field, e ) {  
            console.log('updateObj',field);          
            var keyCode = e.keyCode;
            if ( [40,38].indexOf(keyCode) > -1 ) return;
            var value = e.target.value;
            if ( field == 'fontStyle' ) {
                obj.set({ [field]: value });
                obj.settings[field] = value;
                return this.canvas.renderAll();
            }
            if ( field == 'fill' ) {
                obj.set({ [field]: value });
                if ( ['Rectangle'].indexOf(obj.type) > -1 ) { this.survey.rectColor = value; };
                if ( ['Input Box'].indexOf(obj.type) > -1 ) { this.survey.inputColor = value; }
                obj.settings[field] = value;
                return this.canvas.renderAll();
            }
            if ( obj.type == 'Image' && ['width','height'].indexOf(field) > - 1 ) {
                var value = parseFloat(e.target.value);
                switch ( field ) {
                    case 'width': 
                        var scaleX = ( value / obj.width );
                        var scaleY = scaleX;
                    break;
                    case 'height':
                        var scaleY = ( value / obj.height );
                        var scaleX = scaleY;
                    break;         
                }
                obj.set({ scaleX, scaleY }); 
                obj.settings.scaleX = scaleX;
                obj.settings.scaleY = scaleY;
                return this.canvas.renderAll();                
            }
            if ( obj.type == 'Rectangle' && ['width','height'].indexOf(field) > -1 ) {
                switch ( field ) {
                    case 'width':
                        var width = parseFloat(e.target.value);
                        var height = obj.scaleY * obj.height;
                    break;
                    case 'height':
                        var width = obj.scaleX * obj.width;
                        var height = parseFloat(e.target.value);
                    break;
                }
                obj.set({ scaleX: 1, scaleY: 1, width, height });
                obj.settings.scaleX = 1;
                obj.settings.scaleY = 1;
                obj.settings.width = width;
                obj.settings.height = height;
                return this.canvas.renderAll();
            }
            var value = parseFloat(e.target.value);
            if ( isNaN(value) ) return;
            obj.set({ [field]: value });
            obj.settings[field] = value;
            if ( field == 'zIndex' ) {
                this.updatePage(this.page);
            } else {
                this.canvas.renderAll();
            }
            
        },
        uploadImage () {
            UploadFile(result => {
                EditImage(result.result,img => {
                    this.savedImgs.push(img);
                })
            })
        },
        setHeight ( page ) {
            clearTimeout(this._setHeight);
            this._setHeight = setTimeout(() => {
                this.canvas.setDimensions({ width: page.width, height: page.height });
            },1000);
        },
        removePage ( page ) {
            var index = this.pages.indexOf(page);
            this.pages.splice(index,1);
            if ( this.pages[index] ) {
                this.selectPage(this.pages[index])
            } else if ( this.pages[index-1] ) {
                this.selectPage(this.pages[index-1]) 
            } else {
                this.addPage();
            }
        },
        removeObject ( obj ) {
            this.fields.forEach(field => {
                var index = this[field].indexOf(obj)
                if ( index > -1 ) {
                    this[field].splice(index,1);
                    this.canvas.remove(obj);
                }
            })
        },
        selectPage ( Page ) {
            this.page = Page;      
        },
        updatePage ( page ) {
            this.clearCanvas();
            var canvas = this.canvas;
            var objs = [];
            this.fields.forEach(k => {
                this[k] = page[k];
                this[k].forEach(obj => objs.push(obj));
            });
            objs.sort((a,b) => a.zIndex < b.zIndex ? -1 : 1);
            objs.forEach(obj => canvas.add(obj));
            canvas.renderAll();
        },
        copyPage () {
            var current = this.fields.reduce((p,field) => {
                p[field] = this.page[field];
                return p;
            },{});
            this.addPage();
            console.log('current',current);
            this.fields.forEach(field => {
                current[field].forEach(obj => {
                    switch ( obj.type ) {
                        case 'Button Group':
                            var group = this.makeBtnGroup(obj.settings,obj._objects.filter(o => o.text).map(o => o.text));
                            this.page[field].push(group);
                            this.canvas.add(group);
                            break;
                        case 'Text':
                            console.log('obj.settings',JSON.parse(JSON.stringify(obj.settings)));
                            var text =  this.makeText(obj.settings,obj.text);
                            this.page[field].push(text);
                            this.canvas.add(text);
                            break;  
                        case 'Image':
                            this.makeImage(obj.settings,obj._element.src,img => {
                                this.page[field].push(img);
                                this.canvas.add(img);
                            });
                            break;
                        case 'Back Button':
                            var back = this.makeBack(obj.settings);
                            this.page[field].push(back);
                            this.canvas.add(back);
                            break;
                        case 'Rectangle':
                            var rect = this.makeRect(obj.settings);
                            this.page[field].push(rect);
                            this.canvas.add(rect);
                            break;  
                        case 'Input Box':
                            var input = this.makeInput(obj.settings);
                            this.page[field].push(input);
                            this.canvas.add(input);
                            break;                 
                        default:
                            console.log('What with ???',obj.type);    
                    }
                    
                })
            })
        },
        addPage () {
            var page = {
                width: this.width,
                height: this.height,
                index: this.pages.length,
                title: 'Page '+(this.pages.length+1)   
            }
            this.fields.forEach(field => {
                page[field] = []
            })
            this.pages.push(this.page = page);
        },
        changeFont ( font ) {
            var now = Date.now();
            var Font = new FontFaceObserver(font);
                Font.load().then(() => {
                        this.pages.forEach(page => {
                        page.texts.forEach(text => {
                            text.set('fontFamily',font);
                        });
                        page.btns.forEach(group => {
                            group._objects.forEach(text => {
                                text.text && text.set('fontFamily',font);
                            })
                        })
                    });
                    this.canvas.renderAll();
                },e => {
                    console.log('faield load',e);
                })

        },
        getZIndex () {
            return this.fields.reduce((p,field) => {
                return Math.max(p,this[field].reduce((p,obj) => Math.max(p,obj.zIndex),0));
            },0)
        },
        changeColor ( type, color ) {
            var canvas = this.canvas;
            switch ( type ) {
                case 'backgroundColor':
                    canvas.backgroundColor = color;
                    canvas.renderAll();
                break;
                case 'accentColor':
                    this.pages.forEach(page => {
                        page.btns.forEach(group => {
                                group._objects.forEach(obj => {
                                obj.text && obj.set({ fill: color });
                            })
                        });
                        page.rects.forEach(rect => {
                            Array.isArray(rect._objects) && rect._objects.forEach(obj => {
                                obj.set({ fill: color });
                            })
                        })
                    });
                    canvas.renderAll();
                    break;
                case 'color':
                    this.texts.forEach(text => {
                        text.set({ fill: color });  
                    });
                    canvas.renderAll();
                    break;
                case 'btnColor':
                    this.pages.forEach(page => {
                        page.btns.forEach(group => {
                            group._objects.forEach(obj => {
                                typeof obj.text == 'undefined' && obj.set({ fill: color });
                            })
                        })
                    });
                    canvas.renderAll();
                    break;
                default:
                    console.log('default type',type);            
            }
        },
        setCanvas () {
            var canvas;
            
            this.canvas = canvas = new fabric.Canvas('canvas');

            window.initAligningGuidelines(canvas);
            window.initCenteringGuidelines(canvas);
            
            this.changeColor('backgroundColor',this.survey.backgroundColor);

            canvas.on('object:moving',e => this.moveObject(e.target));
            canvas.on('drop',e => { this.addImage( e ); });
            canvas.on('object:added',e => { canvas.setActiveObject(e.target); this.selectObject([ e.target ]); });
            canvas.on('object:scaling',e => { this.scaleObject(e) });
            canvas.on('selection:created',e => this.selectObject(e.selected));
            canvas.on('selection:updated',e => { this.selectObject(e.selected,e) });
            canvas.on('selection:cleared',e => this.selectObject(false));
        },
        scaleObject ( e ) {
            var obj = e.target;
            obj.settings.scaleX = obj.scaleX;
            obj.settings.scaleY = obj.scaleY;
        },
        selectObject ( obj ) {
            this.selectedObject = obj;            
        },
        moveObject ( obj ) {
            var type = this.types.find(t => t.type == obj.type);
                if ( !type ) return console.log('!type',obj.type);
                if ( !obj.settings ) return console.log('!setting',obj.type);
                obj.settings.top = type.top = obj.top;
                obj.settings.left = type.left = obj.left;
                obj.type != 'Button Group' && ( obj.settings.height = type.height = obj.height );
        },
        clearCanvas () {
            this.canvas.getObjects().forEach(Obj => {
                this.canvas.remove(Obj);
            })
        },
        addImage ( e ) {
            var canvas = this.canvas;
            var data = e.e.dataTransfer.getData('text').split(':').map(f => parseInt(f));
            var index = data[0];
            var offSetX = data[1];
            var offSetY = data[2];
            var getWidth = data[3];
            var getHeight = data[4];
            var Img = this.savedImgs[index];
            var perCentX = offSetX / getWidth; 
            var perCentY = offSetY / getHeight;
            
            var left = e.e.clientX - canvas._offset.left;
            var top = e.e.clientY - canvas._offset.top;
                
            var img = new fabric.Image.fromURL(Img.src,img => {

                var scaleX = Math.min(1,this.width / img.width);
                var scaleY = scaleX;

                left -= ( img.width * perCentX * scaleX )
                top -= ( img.height * perCentY * scaleY )

                var img1 = img.set({ left, top, scaleX, scaleY });
                    img1.zIndex = this.getZIndex()+1
                    img1.type = 'Image';
                    img1.settings = {
                        scaleX,
                        scaleY,
                        left,
                        top,
                        width: img.width,
                        height: img.height,
                        zIndex: img1.zIndex
                    };
                    this.canvas.add(img1);
                    this.imgs.push(img1);
                    this.selectObject([ img1 ]);                
            });

        },
        setText ( obj, value, btnIndex ) {
            value = value.split('/').join('\n');
            obj.set('text',value);
            if ( typeof btnIndex == 'number' ) {
                var type = this.types.find(t => t.type == 'Button Group'); 
                type.btnText[btnIndex] = value.split('\n').join('/')
            }
            this.canvas.renderAll();
        },
        makeInput ( settings ) {
            var { top, left, width, height, backgroundColor, zIndex } = settings;
            console.log({
                top, left, width, height, backgroundColor, zIndex
            });
            var input = new fabric.Rect({
                top,
                left,
                width,
                height,
                rx: 10,
                ty: 10,
                fill : backgroundColor,
                type: 'Input Box',
                zIndex: zIndex        
            });
            input.settings = {
                top,
                width,
                height,
                left,
                zIndex,
                backgroundColor
            }
            
            return input;
            
        },
        addInput () {
            var type = this.types.find(t => t.t == 'inputs');

            var zIndex = this.getZIndex()+1  
            var top = type.top;
            var width = type.width;
            var height = type.height;
            var backgroundColor = this.survey.inputColor;
            var left = (this.canvas.width - width ) / 2;

            var settings = {
                top,
                width,
                height,
                left,
                zIndex,
                backgroundColor
            }

            var input = new fabric.Rect({
                top,
                left,
                width,
                height,
                rx: 10,
                ty: 10,
                fill : backgroundColor,
                type: type.type,
                zIndex: zIndex        
            });
            input.settings = settings;
            this.canvas.add(input);
            this.inputs.push(input);
        },
        makeText ( settings, textContent ) {
            var { top, left, width, fontSize, fontWeight, charSpacing, lineHeight, zIndex } = settings;

            var text = new fabric.IText(textContent,{
                fontFamily: this.selectedFont,
                fontSize,
                top,
                left,
                width,
                textAlign: 'center',
                fill: this.survey.color,
                fontWeight,
                charSpacing,
                lineHeight,
                zIndex                
            });

            text.type = "Text"; 

            text.settings = {
                    top,
                    left,
                    width,
                    fontSize,
                    fontWeight,
                    charSpacing,
                    lineHeight,
                    zIndex
            }  

            return text;
        },
        makeImage ( settings, src, cB ) {
            var canvas = this.canvas;
                console.log('settings',JSON.parse(JSON.stringify(settings)));
            var { scaleX, scaleY, height, width, top, left, zIndex } = settings;    
            var img = new fabric.Image.fromURL(src,img => {
                var img1 = img.set({ left, top, scaleX, scaleY });
                    img1.zIndex = this.getZIndex()+1
                    img1.type = 'Image';
                    img1.settings = {
                        scaleX,
                        scaleY,
                        left,
                        top,
                        width: img.width,
                        height: img.height
                    };
                    cB(img1);
            });
        },
        makeBack ( settings ) {
            var { top, left, zIndex, scaleX, scaleY } = settings;
            var group = new fabric.Group();
            var barTop = new fabric.Rect({
                top : 35,
                left : 20,
                width : 30,
                height : 5,
                angle: -45,
                fill : this.survey.accentColor,        
            });
            var barBottom = new fabric.Rect({
                top : 31.5,
                left : 25,
                width : 29,
                height : 5,
                angle: 45,
                fill : this.survey.accentColor,        
            });
            [barTop,barBottom].forEach(obj => {
                group.addWithUpdate(obj);
            })
            group.top = top;
            group.left = left;
            group.scaleX = 0.5;
            group.scaleY = 0.5;
            group.zIndex = this.getZIndex()+1;
            group.type = 'Back Button';
            group.settings = {
                top: group.top,
                left: group.left,
                scaleX: group.scaleX,
                scaleY: group.scaleY,
                zIndex: group.zIndex
            }
            return group;
        },
        makeRect ( settings ) {

            var { scaleX, scaleY, top, left, width, height, fill, zIndex } = settings;
            if ( typeof height == 'undefined' ) return console.log('makeRect !height',settings);
            var rect = new fabric.Rect({
                top,
                left,
                width,
                height,
                scaleX,
                scaleY,
                fill,
                type: 'Rectangle',
                zIndex            
            });
            rect.settings = {
                top,
                left,
                width,
                height,
                fill,
                scaleX,
                scaleY,
                zIndex
            }            
            return rect;
        },
        addText () {

            var type = this.types.find(t => t.type == 'Text');

            var top = type.top;
            var width = type.width;
            var left = (this.canvas.width - width ) / 2;
            var fontSize = type.fontSize;
            var fontWeight = type.fontWeight;
            var charSpacing = type.charSpacing;
            var lineHeight = type.lineHeight;
            var zIndex = this.getZIndex() + 1;

            var text = new fabric.IText("Edit Your Text Here.....", {
                fontFamily: this.selectedFont,
                fontSize,
                top,
                left,
                width,
                textAlign: 'center',
                fill: this.survey.color,
                fontWeight,
                charSpacing,
                lineHeight,
                zIndex
            });
           text.type = type.type; 
           text.settings = {
                top,
                left,
                width,
                fontSize,
                fontWeight,
                charSpacing,
                lineHeight,
                zIndex
           }  

            this.canvas.add(text);
            this.texts.push(text);
        },
        addBack () {
            
            var group = new fabric.Group();
            var barTop = new fabric.Rect({
                top : 35,
                left : 20,
                width : 30,
                height : 5,
                angle: -45,
                fill : this.survey.accentColor,        
            });
            var barBottom = new fabric.Rect({
                top : 31.5,
                left : 25,
                width : 29,
                height : 5,
                angle: 45,
                fill : this.survey.accentColor,        
            });
            [barTop,barBottom].forEach(obj => {
                group.addWithUpdate(obj);
            })
            group.top = 20;
            group.left = 20;
            group.scaleX = 0.5;
            group.scaleY = 0.5;
            group.zIndex = this.getZIndex()+1;
            group.type = 'Back Button';
            group.settings = {
                top: group.top,
                left: group.left,
                scaleX: group.scaleX,
                scaleY: group.scaleY,
                zIndex: group.zIndex
            };
            this.canvas.add(group);
            this.rects.push(group);
        },
        addRect () {
            var scaleX = 1, scaleY = 1;
            var rect = new fabric.Rect({
                top : 100,
                left : 100,
                width : 60,
                height : 70,
                scaleX,
                scaleY,
                fill : this.survey.rectColor,
                type: 'Rectangle',
                zIndex: this.getZIndex()+1            
            });
            rect.settings = {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                fill: rect.fill,
                scaleX,
                scaleY,
                zIndex: rect.zIndex
            }
            console.log('rect.settings',JSON.parse(JSON.stringify(rect.settings)));
            this.canvas.add(rect);
            this.rects.push(rect);
        },
        addBtn ( qty ) {
            var type = this.types.find(t => t.type == 'Button Group');

            var btnText = type.btnText;

            while ( btnText.length < qty ) { btnText.push('BUTTON '+(btnText.length+1)) }
            
            var top = type.top;
            var height = type.height;
            var gap = type.gap;
            var fontSize = type.fontSize;
            var fontWeight = type.fontWeight;
            var width = type.width

            var zIndex = this.getZIndex()+1;

            var left = (this.canvas.width - width ) / 2;

            var group = new fabric.Group();
            new Array(qty).fill(true).forEach((_,i) => {
                var rect = new fabric.Rect({
                    top : top+(i * ( height + gap)),
                    left : left,
                    width : width,
                    height : height,
                    rx: 10,
                    ry: 10,
                    fill : this.survey.btnColor,
                    type: 'Button',          
                }); 
                var btn = new fabric.IText(btnText[i].split('/').join('\n'),{
                    btnCount: (i + 1),
                    fontFamily: this.selectedFont,
                    fontSize,
                    width,
                    originX: 'center',
                    originY: 'center',
                    top: top+(height / 2)+(i * ( height + gap )),
                    left: (width / 2 ) + left,
                    lineHeight: 1,
                    charSpacing: 30,
                    fontWeight,
                    textAlign: 'center',
                    fill: this.survey.accentColor
                }); 
                [rect,btn].forEach(obj => {
                    group.addWithUpdate(obj);
                });             
            })
            group.zIndex = zIndex;
            group.type = 'Button Group';
            group.settings = {
                top: group.top,
                width,
                height,
                gap,
                zIndex,
                fontSize
            };

            this.canvas.add(group);
            this.btns.push(group);
            this.canvas.renderAll();

        }
    }
}

</script>

<style lang="scss">
.body {
    position: fixed;
    top: 40px;
    width: 100vw;
    height: calc(100vh - 40px);
}    
.nav {
    background-color: rgba(234, 0, 255, 0.488);
    float: left;
    width: 100vw;
    > p { text-align: center; }
    p { line-height: 30px; }
}    
.content {
    display: grid;
    grid-template-columns: 350px 1fr 350px;
    float:left;
    width: 100vw;
    .canvas-box {
        overflow-y: scroll;
        position: relative;
        height: calc(100vh - 30px);
        > input { width: 410px; margin-left: calc(50% - 207px); padding: 5px; font-size: 20px; text-align:center;  }
        .canvas-container { margin: 10px auto; position: relative; margin-bottom: 100px; }
        .canvas-container:after {
    content: 'iPhone 6- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - iPhone 6';
    position: absolute;
    top: 650px;
    left: -100px;
    width: 625px;
    z-index: -1;
}
    }
    .resources {
        overflow-y: scroll;
        position: relative;
        height: calc(100vh - 30px);        
    }
    .settings {
       .page-list {
           p {
               span { float: left; text-align: right; margin-right: 10px; }
           }
       } 
       .label {
           width: 100%;
           float: left;
           margin: 5px 0px;
           input:not([type=color]) { padding: 2px; width: 112px; font-size:18px; }
           input { float:left; width: 114px; }
           select { float: left; width: 120px; }
           p { float: left; margin: 3px }
           
       }
    }
}
</style>