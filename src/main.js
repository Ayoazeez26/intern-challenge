import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram as fabInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare as fabTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faSnapchatSquare as fabSnapchatSquare } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import VueAxios from 'vue-axios'

// library.add(fab)

library.add(fabInstagram, fabTwitterSquare, fabSnapchatSquare, faEnvelopeSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
