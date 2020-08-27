function prettyPhone(msisdn) {
    
    msisdn = msisdn.replace(/ /g,'');
    
    if ( msisdn.startsWith('7') ) return exit('0'+msisdn);    

    if ( msisdn.startsWith('447') ) return exit(msisdn.replace('447','07'));
    
    if ( msisdn.startsWith('+44') ) return exit(msisdn.replace('+44','0'))
    
    return exit(msisdn)
}

function exit(msisdn,arr) {
    arr = arr || [5,8];
    return msisdn.split('').map((c,i) => arr.indexOf(i) > -1 ? ' '+c : c).join('');
}

export default prettyPhone;