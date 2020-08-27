const customers = {};

import WebSoc from '@/utils/WebSoc.js'

export default function(customer_id,cB) {
    if ( customers[customer_id] && customers[customer_id].name ) return cB(customers[customer_id].name);
    if ( customers[customer_id] && !customers[customer_id].name ) { customers[customer_id].cBs.push(cB); return '' }
    customers[customer_id] = { name: false, cBs: [ cB ] }
    WebSoc.SEND('getCustomerName',{ customer_id },name => {
        customers[customer_id].name = name;
        customers[customer_id].cBs.forEach(cB => cB(name));
    });
};