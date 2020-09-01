import Upload from '@/utils/Upload.js'

export default (options,cB) => {
        var current = document.querySelector('#input-box');
            current && current.parentElement.removeChild(current);
    var input = document.createElement('input')
        input.setAttribute('type','file');
        input.id = 'input-box';
        input.value = '';
        input.style.display = 'none';
        typeof options == 'object' && Object.keys(options).forEach(key => input.setAttribute(key,options[key]));
        input.onchange = (e) => {
            console.log('Upload File on Change');
            Upload(e,result => {
                typeof options == 'function' && options(result);
                typeof cB == 'function' && cB(result);
                input.parentElement.removeChild(input);
            });
        }
        document.body.appendChild(input);
        setTimeout(() => {
            input.click();
        },20);
        

}