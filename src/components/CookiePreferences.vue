<template>
  <v-card>
    <v-card-title class="text-h5 primary white--text">
      Manage Cookie Preferences
    </v-card-title>

    <v-card-text class="pt-4">
      <p class="body-1 mb-4">
        Control which cookies you'd like to accept. Changes will take effect
        after refreshing the page.
      </p>

      <v-divider class="my-3"></v-divider>

      <div class="cookie-category mb-4">
        <div class="d-flex align-center justify-space-between mb-2">
          <div>
            <div class="font-weight-bold text-h6">Essential Cookies</div>
            <div class="text-body-2 mt-1">
              Required for the app to function properly
            </div>
          </div>
          <v-switch
            v-model="preferences.essential"
            disabled
            color="primary"
            hide-details
          ></v-switch>
        </div>
        <div class="text-caption grey--text">
          These cookies are necessary for the website to function and cannot be
          disabled. They include session management, PWA functionality, and
          local preferences storage.
        </div>
      </div>

      <div class="cookie-category mb-4">
        <div class="d-flex align-center justify-space-between mb-2">
          <div>
            <div class="font-weight-bold text-h6">Analytics Cookies</div>
            <div class="text-body-2 mt-1">
              Help us improve the app experience
            </div>
          </div>
          <v-switch
            v-model="preferences.analytics"
            color="primary"
            hide-details
          ></v-switch>
        </div>
        <div class="text-caption grey--text">
          We use Google Analytics to understand how visitors interact with our
          app. This helps us identify issues and improve features. No personally
          identifiable information is collected.
        </div>
      </div>

      <v-alert v-if="saveSuccess" type="success" dense text class="mb-0">
        Preferences saved successfully! Refresh the page to apply changes.
      </v-alert>

      <v-alert v-if="saveError" type="error" dense text class="mb-0">
        Failed to save preferences. Please try again.
      </v-alert>

      <div v-if="lastUpdated" class="text-caption grey--text mt-3">
        Last updated: {{ formatDate(lastUpdated) }}
      </div>
    </v-card-text>

    <v-card-actions class="px-4 pb-4">
      <v-btn text @click="resetToDefaults">
        Reset to Defaults
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="savePreferences">
        Save Preferences
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { getConsentStatus, setConsent } from '@/utils/cookieConsent'

export default {
  name: 'CookiePreferences',

  data() {
    return {
      preferences: {
        essential: true,
        analytics: false
      },
      lastUpdated: null,
      saveSuccess: false,
      saveError: false
    }
  },

  mounted() {
    this.loadPreferences()
  },

  methods: {
    loadPreferences() {
      const consent = getConsentStatus()

      if (consent) {
        this.preferences.analytics = consent.analytics
        this.lastUpdated = consent.timestamp
      }
    },

    savePreferences() {
      try {
        const consent = {
          essential: true,
          analytics: this.preferences.analytics,
          timestamp: new Date().toISOString()
        }

        setConsent(consent)
        this.lastUpdated = consent.timestamp
        this.saveSuccess = true
        this.saveError = false

        // Hide success message after 3 seconds
        setTimeout(() => {
          this.saveSuccess = false
        }, 3000)

        // Emit event for parent components
        this.$root.$emit('cookie-consent-updated', consent)
      } catch (error) {
        this.saveError = true
        this.saveSuccess = false
        console.error('Failed to save preferences:', error)
      }
    },

    resetToDefaults() {
      this.preferences.essential = true
      this.preferences.analytics = false
    },

    formatDate(isoString) {
      if (!isoString) return ''
      const date = new Date(isoString)
      return date.toLocaleString()
    }
  }
}
</script>

<style scoped>
.cookie-category {
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
}
</style>
