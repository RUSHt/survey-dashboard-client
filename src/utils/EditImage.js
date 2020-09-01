import EditImage from '@/components/EditImage.vue';
import Vue from 'vue';

const showEditImage = Vue.extend(EditImage);

function newEditImage( file, cB ) {
    if ( typeof file == 'string' ) {
        return edit(file);
    }
    var reader = new FileReader();
        reader.onload =  e  => edit(e.target.result);
        reader.readAsDataURL(file);

        function edit(url) {
            new showEditImage({
                propsData: {
                    base64: url,
                    resp: cB
                }
            }).$mount();
        }

}

export default newEditImage;