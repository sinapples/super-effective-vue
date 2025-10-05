<template>
  <v-slide-y-reverse-transition>
    <v-sheet v-if="showBanner" class="cookie-banner elevation-8" color="white">
      <v-container class="py-3">
        <!-- Simple banner view -->
        <v-row v-if="!showCustomize" align="center" no-gutters>
          <v-col cols="12" sm="auto" class="flex-grow-1 mb-2 mb-sm-0">
            <div class="d-flex align-center">
              <v-icon class="mr-2" color="grey darken-1">mdi-cookie</v-icon>
              <div class="body-2">
                We use cookies to improve your experience and analyze app usage.
                <router-link to="/privacy" class="ml-1">Learn more</router-link>
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="auto">
            <div class="d-flex justify-end">
              <v-btn small text class="mr-2" @click="showCustomize = true">
                Customize
              </v-btn>
              <v-btn
                small
                text
                color="grey darken-1"
                class="mr-2"
                @click="rejectAll"
              >
                Reject All
              </v-btn>
              <v-btn small color="primary" @click="acceptAll">
                Accept All
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- Customization view -->
        <div v-else>
          <v-row align="center" class="mb-3">
            <v-col>
              <div class="text-h6">Cookie Preferences</div>
            </v-col>
            <v-col cols="auto">
              <v-btn icon small @click="showCustomize = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row class="mb-3">
            <v-col cols="12" sm="6">
              <div class="cookie-category">
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <div class="font-weight-bold">Essential Cookies</div>
                    <div class="text-caption grey--text">
                      Required for the app to function
                    </div>
                  </div>
                  <v-switch
                    v-model="essential"
                    disabled
                    color="primary"
                    hide-details
                    class="mt-0"
                  ></v-switch>
                </div>
              </div>
            </v-col>

            <v-col cols="12" sm="6">
              <div class="cookie-category">
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <div class="font-weight-bold">Analytics Cookies</div>
                    <div class="text-caption grey--text">
                      Help us improve the app
                    </div>
                  </div>
                  <v-switch
                    v-model="analytics"
                    color="primary"
                    hide-details
                    class="mt-0"
                  ></v-switch>
                </div>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="text-right">
              <v-btn text class="mr-2" @click="showCustomize = false">
                Cancel
              </v-btn>
              <v-btn color="primary" @click="savePreferences">
                Save Preferences
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-sheet>
  </v-slide-y-reverse-transition>
</template>

<script>
import { getConsentStatus, setConsent } from '@/utils/cookieConsent'

export default {
  name: 'CookieConsent',

  data() {
    return {
      showBanner: false,
      showCustomize: false,
      essential: true, // Always true and disabled
      analytics: false
    }
  },

  mounted() {
    const consent = getConsentStatus()

    // Show banner if user hasn't made a choice
    if (consent === null) {
      this.showBanner = true
      this.analytics = false
    } else {
      this.analytics = consent.analytics
    }
  },

  methods: {
    acceptAll() {
      this.analytics = true
      this.savePreferences()
    },

    rejectAll() {
      this.analytics = false
      this.savePreferences()
    },

    savePreferences() {
      const consent = {
        essential: true,
        analytics: this.analytics,
        timestamp: new Date().toISOString()
      }

      setConsent(consent)
      this.showBanner = false
      this.showCustomize = false

      // Emit event so analytics can be initialized if approved
      this.$root.$emit('cookie-consent-updated', consent)

      // Reload page to apply analytics changes
      if (this.analytics) {
        window.location.reload()
      }
    }
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-top: 2px solid #f74d5e;
}

.cookie-category {
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>
