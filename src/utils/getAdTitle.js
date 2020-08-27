const ads = {};

import WebSoc from '@/utils/WebSoc.js'

export default function(ad_id,cB) {
    //console.log('ad_id',ad_id);
    if ( ads[ad_id] && ads[ad_id].title ) return cB(ads[ad_id].title);
    if ( ads[ad_id] && !ads[ad_id].title ) { ads[ad_id].cBs.push(cB); return '' }
    ads[ad_id] = { title: false, cBs: [ cB ] }
    WebSoc.SEND('getAdTitle',{ ad_id },title => {
        ads[ad_id].title = title;
        ads[ad_id].cBs.forEach(cB => cB(title));
    });
};