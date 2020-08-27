import { cosh } from "core-js/fn/number";

const codes = [];

const getCampaignCode = (campaign,cB) => {

    const length = 5, codes = [], p = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var found = false;
    var code = new Array(length).fill(true).map(f => p[parseInt(Math.random(19) * 62)]).join('');

    campaign.pages.forEach(page => {
        if ( page.code == code ) { found = true; }
        page.btns.forEach(btn => { codes.push(btn.code); if ( btn.code == code ) { found = true; } });
        if ( codes.indexOf(code) > -1 ) { found = true; }
        codes.push(page.code);
    });
    if ( campaign.charts && campaign.charts[code] ) { found = true; }
    if ( campaign.images && campaign.images[code] ) { found = true; }
    if ( campaign.pdfLinks && campaign.pdfLinks.find(l => l.code == code) ) { found = true; }
    if ( found ) { console.log('found',code); return setTimeout(() => { getCampaignCode(campaign,cB); },1000); }
    cB(code);
};

export default getCampaignCode;