import Vue from 'vue'

import { initializeAnalytics } from '@/utils/analytics'
import { hasAnalyticsConsent } from '@/utils/cookieConsent'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/misc/register-service-worker'
import '@/misc/handle-network-status'

import 'pwacompat'
import vuetify from './plugins/vuetify'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

// Initialize Google Analytics if user has given consent
if (hasAnalyticsConsent()) {
  initializeAnalytics().catch(err =>
    console.error('Failed to initialize analytics:', err)
  )
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// eslint-disable-next-line no-console
