const users = {};

import WebSoc from '@/utils/WebSoc.js'

export default function(user_id,cB) {
    if ( users[user_id] && users[user_id].name ) return cB(users[user_id].name);
    if ( users[user_id] && !users[user_id].name ) { users[user_id].cBs.push(cB); return '' }
    users[user_id] = { name: false, cBs: [ cB ] }
    WebSoc.SEND('getName',{ user_id },name => {
        users[user_id].name = name;
        users[user_id].cBs.forEach(cB => cB(name));
    });
};