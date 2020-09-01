
const postMinify = ( dataURL, cB ) => {
    fetch(dataURL)
    .then(res => res.blob())
        .then(blob => {
        var x = new XMLHttpRequest();
            x.onload = () => { 
                if ( x.readyState == 4 && x.status == 200 ) {
                    var resp = JSON.parse(x.responseText);
                    cB(resp);
                }
            }
            x.open('POST','https://api.survey-vip.com/minify?key=01c3cb5a33f0b47e8d3e9e4521f4ba4a');
            x.send(blob);
    })
}

export default postMinify