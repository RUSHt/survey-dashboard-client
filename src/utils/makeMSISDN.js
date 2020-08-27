function makeMSISDN(phone) {
    var msisdn = phone.replace(/ /g,'');
    if ( msisdn.startsWith('7') ) {
        return '44'+msisdn;
    }
    if ( msisdn.startsWith('07') ) {
        return msisdn.replace('07','447');
    }
    if ( msisdn.startsWith('00447') ) {
        return msisdn.replace('00447','447')
    }
    if ( msisdn.startsWith('+44') ) {
        return msisdn.replace('+447','447')
    }
    if ( msisdn.startsWith('00') ) {
        return msisdn.replace('00','');
    }
    if ( msisdn.startsWith('+') ) {
        return msisdn.replace('+','');
    }
    return msisdn;
}

export default makeMSISDN;