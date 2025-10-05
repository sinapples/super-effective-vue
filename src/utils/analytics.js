/**
 * Google Analytics 4 helper utilities for Vue SPA
 * Handles page view and event tracking with GDPR consent
 */

import { hasAnalyticsConsent } from './cookieConsent'

const GA_MEASUREMENT_ID = 'G-NZ6Y37QFYM'

/**
 * Initialize Google Analytics (only if consent is given)
 * @returns {Promise} Resolves when GA is loaded
 */
export const initializeAnalytics = () =>
  new Promise((resolve, reject) => {
    if (!hasAnalyticsConsent()) {
      console.info('Analytics not initialized - no consent')
      reject(new Error('No analytics consent'))
      return
    }

    if (window.gtag) {
      console.info('Analytics already initialized')
      resolve()
      return
    }

    // Create script tag for gtag.js
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

    script.onload = () => {
      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || []
      // eslint-disable-next-line prefer-rest-params, func-names
      window.gtag = function() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      })

      console.info('Google Analytics initialized')
      resolve()
    }

    script.onerror = () => {
      console.error('Failed to load Google Analytics')
      reject(new Error('Failed to load GA script'))
    }

    document.head.appendChild(script)
  })

/**
 * Track page views when routes change
 * @param {Object} to - Vue Router 'to' object
 */
export const trackPageView = to => {
  if (!hasAnalyticsConsent()) return

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: to.path,
      page_title: to.name || document.title,
      page_location: window.location.href
    })
  }
}

/**
 * Track custom events
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (!hasAnalyticsConsent()) return

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

/**
 * Track Pokemon searches
 * @param {string} pokemonName
 * @param {Array} types
 */
export const trackPokemonSearch = (pokemonName, types) => {
  trackEvent('pokemon_search', {
    pokemon_name: pokemonName,
    pokemon_types: types.join(', '),
    search_timestamp: new Date().toISOString()
  })
}

/**
 * Track type selections
 * @param {string} type
 * @param {Array} allSelectedTypes
 */
export const trackTypeSelection = (type, allSelectedTypes) => {
  trackEvent('type_selected', {
    type_name: type,
    selected_types: allSelectedTypes.filter(Boolean).join(', '),
    selection_count: allSelectedTypes.filter(Boolean).length
  })
}

/**
 * Track donation button clicks
 * @param {string} platform - 'venmo', 'paypal', or 'buymeacoffee'
 */
export const trackDonation = platform => {
  trackEvent('donation_click', {
    platform,
    button_location: 'support_page'
  })
}

/**
 * Track voice assistant link clicks
 * @param {string} platform - 'alexa' or 'google_assistant'
 */
export const trackVoiceAssistant = platform => {
  trackEvent('voice_assistant_click', {
    platform
  })
}

/**
 * Track PWA installation
 */
export const trackPWAInstall = () => {
  trackEvent('pwa_installed', {
    install_timestamp: new Date().toISOString()
  })
}

/**
 * Track service worker updates
 */
export const trackServiceWorkerUpdate = () => {
  trackEvent('service_worker_update', {
    update_timestamp: new Date().toISOString()
  })
}
