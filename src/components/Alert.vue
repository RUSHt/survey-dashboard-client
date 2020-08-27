<template>
	<div :class="['v-alert-container',{ 'v-background': background },{ 'off-top': !show },{ error: error }]" @click="backgroundClick($event)">
		<div class="v-alert" :style="{ position: position || '', width: width+'px' }">
			<header><p>{{ header }}</p><div @click="exit()" class="x"></div></header>
			<p class="message" v-html="message"></p>
			<input v-if="typeof input == 'string'" @keydown="keyDown($event)" v-model:value="input" />
			<div class="v-btns">
				<p class="btn gr" @click="exit() && resp(false)">{{ cancel }}</p>
				<p class="btn" @click="exit() && resp(typeof input == 'string' ? input : true)">{{ OK }}</p>
			</div>	
		</div>
	</div>
</template>

<script>

var $el;

export default {
	props: {
		header: {
			default: 'Message'
		},
		message: {
			default: ''
		},
		input: {
			default: null
		},
		cancel: {
			default: 'no'
		},
		OK: {
			default: 'yes'
		},
		resp: {
			default: () => {}
		},
		position: {
			default: 'fixed'
		},
		background: {
			default: true
		},
		error: {
			default: false
		},
		width: {
			default: 370
		},
		show: false
	},
	mounted: function() {
		document.body.appendChild(this.$el);
		this.toogleShow();
		typeof this.input == 'string' && this.$el.querySelector('input').focus();
	},
	methods: {
		exit: function() {
			this.toogleShow();
			setTimeout(() => this.$el.parentElement.removeChild(this.$el),350);
			return true;
		},
		keyDown ( e ) {
			e.keyCode == 9 && e.preventDefault();
			[13,9].indexOf(e.keyCode) > -1 && this.exit() && this.resp(this.input);
		},
		toogleShow () {
			setTimeout(() => {
				this.show = !this.show;
				!this.show && ( this.background = false );
			},0);
		},
		backgroundClick ( e ) {
			e.target.classList.contains('v-background') && setTimeout(() => this.show && this.exit(),5);
		}
	}
}

</script>

