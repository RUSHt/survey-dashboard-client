import selectCustomers from '@/components/selectCustomers.vue';

import Vue from 'vue';

const show = Vue.extend(selectCustomers);

export default function (options = {},cB) {
			if ( typeof options == 'function' ) {
				options = {
					resp: options
				}
			} else {
				options.resp = cB || (() => {});
			}
			
			new show({
					propsData: options
	 			}).$mount()
}