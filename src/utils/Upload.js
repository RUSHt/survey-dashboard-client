export default (event,cB) => {
    console.log('fileReader...');
    for ( var i = 0; i < event.target.files.length; i++ ) {
        fileReader(event.target.files[i]);
    }

    function fileReader(file) {

    var reader = new FileReader(), 
        types = { pdf: { pdf: 1 },image: { png: 1, gif: 1, jpeg: 1, jpg: 1, eot: 1, ttf: 1, woff: 1, woff2: 1,ico: 1 }, bin: { zip: 1, exe: 1, mp4: 1 } },
        ext = file.name.split('.')[1].toLowerCase(), 
        type = ( types.image[ext] && 'image' ) || ( types.bin[ext] && 'bin' ) || ( types.pdf[ext] && 'pdf' ) || 'text';
        reader.onload = function() { 
            if ( event.target ) event.target.value = '';
            cB({ fileName: file.name, result: reader.result, type: type, ext });
        }
        type == 'text' ? reader.readAsText(file) : reader.readAsDataURL(file);          
    }
}