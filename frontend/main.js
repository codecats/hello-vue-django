import Vue from 'vue'
import App from './App.vue'

require('./assets/sass/main.sass');

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App)
});
