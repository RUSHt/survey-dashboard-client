
import Alert from '@/utils/Alert.js';

var ws;
var reconnect = 0;
var q = 0;
var Q = {};
var now;

const WebSoc = (url,cBs) => {
    
    ws = null;

    ws = new WebSocket(url);

    window.ws = ws;

    ws.onopen = () => {

        WebSoc.open = true;
        
        now = Date.now();
        
        reconnect = 0;

        var interval = setInterval(() => { ws.readyState == 1 ? ws.send("1") : clearInterval(interval) },19000);

        typeof cBs.onopen == 'function' && cBs.onopen(ws);
    
    }

    ws.SEND = ( msg, cB, data ) => {
        //console.log('send',msg);
        if ( ws.readyState != 1 ) return console.log('!open');

        if ( typeof data == 'function' && typeof cB == 'object' ) {
            msg = { t: msg, data: cB }
            Q[msg.data.q = ++q] = data;
            ws.send(JSON.stringify(msg));
        } else {
            msg.data = msg.data || {};
            Q[msg.data.q = ++q] = cB; 
            ws.send(JSON.stringify(msg)) 
        }
    }

    ws.onclose = () => {
        console.log('closed after',Date.now() - now);
        WebSoc.open = false;
        setTimeout(() => {
            WebSoc(url,cBs);
        },reconnect = ( ( reconnect + 500 ) * 2 ));       
    }

    ws.onmessage = (data) => {
        if ( data.data == "1" ) { return; }
        
        var msg = JSON.parse(data.data);

        //console.log('received msg',msg);

        var error = msg.data && msg.data.error;

        if ( error ) return Alert.error(error,() => {
            typeof Q[msg.q] == 'function' && Q[msg.q](msg.data);
        });

        if ( typeof Q[msg.q] == 'function' ) { return Q[msg.q](msg.data) };

        if ( typeof Service[msg.t] == 'function' ) Service[msg.t](msg.data);

        if ( typeof cBs.onmessage == 'function' ) { return cBs.onmessage(msg) };

    }

    var Service = {
        saveGuid (data) {
            
            var { _id, id } = data;

            if ( _id && id ) {
                try {
                    localStorage._id = _id;
                    localStorage.id = id;
                } catch(e) {

                }
            }

        } 
    }
}

WebSoc.SEND = ( msg, cB, data ) => { 
    
    if ( !ws ) return delay();
    if ( ws.readyState != 1 ) return delay();

    ws.SEND(msg,cB,data) 

    function delay() {
        console.log('delay')
        setTimeout(() => {
            WebSoc.SEND( msg, cB )
        },100);
    }
};

export default WebSoc;