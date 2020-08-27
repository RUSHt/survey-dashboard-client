import Vue from 'vue'
import Vuex from 'vuex'

import getStaffName from '@/utils/getStaffName.js';
import getCustomerName from '@/utils/getCustomerName.js';
import getAdTitle from '@/utils/getAdTitle.js'

import WebSoc from '@/utils/WebSoc.js';
import MD5 from '@/utils/MD5.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    customerCount: 0,
    userCount: 0,
    client_id: "5d57d73e6b7852728852a4af",
    currentOffers: false,
    DB: {
      users: [],
      customers: [],
      ads: [],
      campaigns: []
    }
  },
  mutations: {
    setValue: ( state, data ) => Object.keys(data).forEach(key => state[key] = data[key]),
    addDB ( state, data ) {
      data.DB.endsWith('-customers') && ( data.DB = 'customers' )
      data.DB == 'surveys' && ( data.DB = 'campaigns' );
      var DB = state.DB[data.DB];

      console.log('addDB',data.DB,JSON.parse(JSON.stringify(data.items)));

      switch ( data.DB ) {
        case 'campaigns':
          data.items.forEach(campaign => {
            campaign.hide = false;
            campaign.pages.forEach(page => { page.issued = page.issued || 0; page.redeemed = page.redeemed || 0 });
          });
          break;
        case 'customers':
          data.items.forEach(item => {
            item.ads = item.ads || [];
            item.detail = [];
            item.open = false;
            item.redeemRewards = item.redeemRewards || [];
            item.redeemRewards.forEach(ad => {
              ad.title = ad.title || '';
              ad.staff = ad.staff || '';
            })
          })
          break;
        case 'users':
          data.items.forEach(staff => {
            staff.manager = staff.manager || false;
            staff.active = new Date(staff.active).valueOf();
            staff.lastRedeem = new Date(staff.lastRedeem).valueOf();
            staff.detail = [];
            staff.open = false;
          });
          break;
      }
      data.items.forEach(item => {
        if ( DB[item._id] && DB.findIndex(i => i._id == item._id) ) { return DB.splice(DB.findIndex(i => i._id == item._id),1,DB[item._id] = item._id)  }
        data.top ? DB.splice(0,0,item) : DB.push(DB[item._id] = item);
      });
      data.DB == 'campaigns' && !data.top && DB.sort((a,b) => a.created < b.created ? 1 : - 1)
    },
    removeDB ( state, data ) {
      data.DB.endsWith('-customers') && ( data.DB = 'customers' )
      data.DB == 'surveys' && ( data.DB = 'campaigns' );
      data.DB == 'jb-ads' && ( data.DB = 'ads' );
      console.log('removeDB',data.DB,data._id);
      var DB = state.DB[data.DB];
      var item = DB[data._id];
      if ( !item ) return console.log('!item');
      var index = DB.indexOf(item)
      console.log('index',index)
      index > -1 && DB.splice(index,1);
      delete DB[data._id]
    },
    resetDB ( state, data ) {
      data.DB.endsWith('-customers') && ( data.DB = 'customers' )
      data.DB == 'surveys' && ( data.DB = 'campaigns' );
      data.DB == 'jb-ads' && ( data.DB = 'ads' );
      state.DB[data.DB] = [];
    },
    removeCampaign ( state, campaign ) {

    },
    setObjValue ( state, data ) {
      data.obj[data.k] = data.v
    },
    addPage ( state, data ) {
      console.log('mutate addPage data.campaign',data.campaign);
      console.log('mutate addPage data.addPage',data.addPage);
    },
    updateDB ( state, data ) {
      data.DB.endsWith('-customers') && ( data.DB = 'customers' )
      data.DB == 'surveys' && ( data.DB = 'campaigns' );
      data.DB == 'jb-ads' && ( data.DB = 'ads' );
      var DB = state.DB[data.DB];
      if ( !DB ) return
      var item = DB[data._id];
      if ( !item ) item = DB.find(i => i._id == data._id);
      if ( !item ) return console.log('!item',data.DB,data._id,data.$update);
      if ( !item ) {
          console.log('List.watch $update !current');
      }
      Object.keys(data.$update).forEach((key,i,arr) => {
          var obj = item;
          key.split('.').forEach((Key,i,arr) => { 
            if ( !obj ) return console.log('stop',i,obj,key.split('.')); 
            if ( i == arr.length - 1 ) { 
              if ( !isNaN(Key) && Array.isArray(obj) ) { 
                if ( data.DB == 'campaigns' && arr[arr.length-2] == 'pages' ) {
                  var newPage = data.$update[key];
                  if ( obj.find(p => p.code == newPage.code) ) return;
                } 
                return obj.splice(parseInt(Key),0,data.$update[key]) 
              }
              obj[Key] = data.$update[key];
            } else {  
              obj = obj[Key];
            } 
          });
      });
    }
  },
  actions: {
    initStore ({ commit, state }) {
      console.log('initStore');
      const URL = 'api.survey-vip.com';

      var path = '';

      try {
        var hash = JSON.parse(localStorage.hash);
            hash && ( path = '/'+hash._id+'/'+hash.hash);
      } catch(e) {

      }

      WebSoc('wss://'+URL+path,{
        onopen ( ws ) {
          console.log('open',ws);
          var existAuth = localStorage.auth;
          if ( !existAuth ) return;

          existAuth = JSON.parse(existAuth);
          
          WebSoc.SEND({ t: 'reAuth', data: { reauth: localStorage.auth }},resp => {
              resp.username = existAuth.un;
              if ( resp.auth === true ) { commit('setValue',resp); }
          });
        },
        onmessage (msg) {
          console.log('onmessage',msg);
          typeof Service[msg.t] == 'function' ? Service[msg.t](msg.data) : console.log('no Service msg',msg);
        }
      })

      const Service = {
        setHash: ( hash ) => {
          commit('setValue',hash);
          try {
            localStorage.hash = JSON.stringify(hash);
            
          } catch(e) {

          }
        },
        adApproved: ({ ad_id, client_id }) => {
          commit('pushApprovedAd',{ ad_id, client_id });
        },
        dbWatch: ( watch ) => {
          console.log('dbWatch',watch); // CURRENTLY USES getDashboard q;
          if ( !watch ) return console.log('store.updateWatch !watch');
          if ( watch.DB != this.DB ) return console.log('watchDB watch.DB != this.DB',watch);
          if ( watch.$insert ) {
              console.log('watch.$insert',watch.DB,watch.$insert);
              commit('addDB',{ DB: watch.DB, items: [ watch.$insert ], top: true })
          } else if ( watch.$delete ) {
              commit('removeDB',{ DB: watch.DB, _id: watch._id })
          } else if ( watch.$update ) {
              commit('updateDB',watch);
          } 
        }
      }
    },
    Auth ({ commit, state }, data ) {
      var { un, pw, complete } = data;
      WebSoc.SEND({ t: 'Auth', data: { un, pw: MD5.code(state.hash+MD5.code(pw)), dashboard: true }},resp => {
        if ( resp.auth === true ) { commit('setValue',{ username: un }); commit('setValue',resp); }
        if ( resp.reauth ) { localStorage.auth = JSON.stringify({ un: un, auth: MD5.code(state.hash+MD5.code(pw)+resp.reauth) }) }
        complete(resp);
      })
    },
    newPassword ({ commit, state }, data ) {
      var { un, pw, email, mobile, complete, prettyPhone, msisdn } = data;
      WebSoc.SEND({ t: 'newPassword', data: { un, pw: MD5.code(pw), email, mobile, prettyPhone, msisdn, url: 'my.copperhouse.club' } },resp => {
        
        if ( resp.auth == true ) { commit('setValue',{ username: un }); commit('setValue',resp) }
        
        complete(resp);
      })
    },
    deAuth ( { commit }) {
      WebSoc.SEND({ t: 'deAuth' },() => { commit('setValue',{ auth: false, menu: [] });; console.log('Logged Out'); })
    },
    logout ({ commit }) {
      console.log('vuex logout');
      WebSoc.SEND({ t: 'deAuth' },() => { commit('setValue',{ auth: false, menu: [] });; console.log('Logged Out'); })
    },
    getDashboard ({ commit, state }, client_id ) {
      console.log('getDashboard state.client_id',client_id);
      commit('setValue',{ client_id: "5d57d73e6b7852728852a4af" });
      ['customers','users','ads','campaigns'].forEach(DB => commit('resetDB',{ DB }));
      WebSoc.SEND({ t: 'getDashboard', data: { client_id: state.client_id }},(resp) => {
        console.log('getDashboard resp',resp);
        resp.customers && commit('addDB',{ DB: 'customers', items: resp.customers });
        resp.users && commit('addDB',{ DB: 'users', items: resp.users });
        resp.ads && commit('addDB',{ DB: 'ads', items: resp.ads });
        
        console.log('resp.campaigns',resp.campaigns);
        if ( resp.campaigns ) {
          var currentOffers = resp.campaigns.find(c => c.currentOffers);
          commit('setValue',{ currentOffers });
          currentOffers && resp.campaigns.splice(resp.campaigns.indexOf(currentOffers),1);
        }
        resp.campaigns && commit('addDB',{ DB: 'campaigns', items: resp.campaigns });
        resp.customerCount && commit('setValue', resp );
        resp.userCount && commit('setValue', resp );
        var $watch = resp.$watch;
        if ( !$watch ) return;        
        if ( $watch.$insert ) {
            console.log('$watch.$insert',$watch.DB,$watch.$insert);
            commit('addDB',{ DB: $watch.DB, items: [ $watch.$insert ], top: true });
        } else if ( $watch.$delete ) {
            commit('removeDB',{ DB: $watch.DB, _id: $watch._id })
        } else if ( $watch.$update ) {
            commit('updateDB',$watch);
        } 
      })
    },
    dbSearch ({ commit, state }, data ) {
      clearTimeout(this._searchCustomers);
      this._searchCustomers = setTimeout(() => {
             commit('resetDB',{ DB: data.db });
              var search = Object.keys(data.search).reduce((p,field) => {

              var Field = data.search[field];
              if ( Field.value.length == 0 ) return p;
              if ( typeof Field.onsearch == 'function' ) { 
                  p[field] = Field.onsearch(Field.value);
              } else {
                  p[field] = { $regex: Field.value, $options: 'i' }
              }
              return p;
          },{});

          //console.log('dbSearch',search);

          WebSoc.SEND({ t: 'dbSearch', data: { DB: data.db, find: search, limit: data.limit }},items => {
            //console.log('resp',JSON.parse(JSON.stringify(items)));
            commit('addDB',{ DB: data.db, items })
          })
      },500)      
    },
    stopDashboard () {

    },
    updateCampaign ({ commit, state }, data ) {
      console.log('data',data);
      if ( data.deleteCampaign ) {
        commit('removeDB',{ DB: 'campaigns', _id: data.deleteCampaign._id });
        WebSoc.SEND({ t: 'removeCampaign', data: { _id: data.deleteCampaign._id, client_id: data.deleteCampaign.client_id }});
      }
      if ( data.saveCampaign ) {
          var campaign = data.saveCampaign;
          
          if ( !campaign._id ) {
          
            //commit('addDB',{ DB: 'campaigns', items: [ campaign ], top: true });
            delete campaign._id;
            WebSoc.SEND({ t: 'saveCampaign', data: { campaign }},resp => {
                console.log('resp._id',resp._id);
                campaign._id = resp._id;
            })
        }
        if ( campaign._id ) {
            WebSoc.SEND('updateCampaign',{ _id: campaign._id, title: campaign.title },() => {
                console.log('updated');
            })
        }
      }

      if ( data.addPage ) {
        //console.log('addPage',data.addPage);
        commit('addPage', data );
        var campaign = data.campaign;
        return WebSoc.SEND('updateCampaign',{ _id: campaign._id, addPage: data.addPage },() => {
          //console.log('added Page');
        });
      }
      if ( data.removePage ) {
        var campaign = data.campaign;
        return WebSoc.SEND('updateCampaign',{ _id: campaign._id, client_id: campaign.client_id, removePage: data.removePage, removeFromCampaign: data.removeFromCampaign, removeFromCustomers: data.removeFromCustomers },() => {
          console.log('removed Page');
        })
      }
      if ( data.unRemovePage ) {
        return WebSoc.SEND('updateCampaign',{ _id: data.campaign._id, unRemovePage: data.unRemovePage },() => {
          console.log('unremovedPage');
        })
      }
      if ( data.permRemovePage ) {
        return WebSoc.SEND('updateCampaign',{ _id: data.campaign._id, permRemovePage: data.permRemovePage },() => {
          console.log('permRemoved Page')
        })
      }

    },

    updatePages ({ commit, state }, data ) {
      var campaign = data.campaign;
      var pages = data.pages;
      WebSoc.SEND('updateCampaign',{ _id: campaign._id, client_id: campaign.client_id, pages: pages },() => {
        //console.log('updated pages');
      })
    },
    removeCampaign ({ commit, state }, campaign ) {
      //console.log('removeCampaign',campaign._id);
      commit('removeDB',{ DB: 'campaigns', _id: campaign._id });
    },
    showStaffDetail ({ commit, state }, staff ) {
      staff.open = !staff.open;
      if ( !staff.open ) return;
      console.log('showStaffDetail',JSON.parse(JSON.stringify(staff)));
    },
    showCustomerDetail ( { commit, state }, customer ) {
      customer.open = !customer.open;
      if ( !customer.open ) return;
      customer.ads.forEach(ad => {
        if ( !ad.field ) {
          commit('setObjValue',{ obj: ad, k: 'field', v: ''});
          getAdTitle(ad.ad_id,title => {
            commit('setObjValue',{ obj: ad, k: 'field', v: title });
          })
        }
      })
      customer.redeemRewards = customer.redeemRewards || [];
      customer.redeemRewards.forEach(ad => {
        if ( !ad.staff ) {
          commit('setObjValue',{ obj: ad, k: 'staff', v: '' })
          getStaffName(ad.user_id,name => {
            commit('setObjValue',{ obj: ad, k: 'staff', v: name })
          })
        }
        if ( !ad.title ) {
          commit('setObjValue',{ obj: ad, k: 'title', v: '' })
          getAdTitle(ad.ad_id,title => {
            commit('setObjValue',{ obj: ad, k: 'title', v: title });
          })
        }
      })
    },        
  },
  modules: {
  }
})
