import Alert from '@/components/Alert.vue';

import Vue from 'vue';

const showAlert = Vue.extend(Alert);

function newAlert(options,cB) {
			options.resp = cB || (() => {});
			new showAlert({
					propsData: options
	 			}).$mount()
}

newAlert.yesno = ( message, cB ) => {
	newAlert({
		header: 'Confirm',
		message: message,
		OK: 'yes',
		cancel: 'no'
	},cB);
}

newAlert.message = ( message, cB ) => {
	newAlert({
		header: 'Message',
		message: message,
		OK: 'OK',
		cancel: ''
	},cB)
}

newAlert.confirm = ( message, cB ) => {
	newAlert({
		header: 'Confirm',
		message: message,
		OK: 'OK',
		cancel: 'Cancel'
	},cB)
}

newAlert.error = ( message, cB ) => {
	newAlert({
		header: 'Error',
		message: message,
		OK: 'OK',
		cancel: '',
		error: true
	},cB)
}

newAlert.prompt = ( message, cB ) => {
	newAlert({
		header: 'Prompt',
		message: message,
		OK: 'OK',
		cancel: 'cancel',
		input: ''
	},cB);
}

export default newAlert;