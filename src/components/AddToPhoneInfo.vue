<template>
  <v-card class="elevation-0 pt-4" color="secondary lighten-1">
    <div>
      <h3 class="white--text">Add Super Effective to Your Phone</h3>
      <v-card-text class="white--text">
        <div class="body-1 mb-3">
          Install this app on your home screen for quick and easy access when
          you're on the go.
        </div>

        <!-- Chrome/Edge/Samsung Browser (Android & Desktop) -->
        <div v-if="isInstallable && !isIOS" class="mb-4">
          <v-btn color="primary" block class="noCap mb-2" @click="installPWA">
            <v-icon class="mr-2">mdi-download</v-icon>
            Install App
          </v-btn>
        </div>

        <!-- iOS Instructions -->
        <div v-if="isIOS" class="instruction-section mb-3">
          <div class="subtitle-1 font-weight-bold mb-2">For iPhone/iPad:</div>
          <ol class="instruction-list">
            <li>
              Tap the Share button
              <v-icon small class="mx-1">mdi-export-variant</v-icon>
            </li>
            <li>Scroll down and tap "Add to Home Screen"</li>
            <li>Tap "Add" in the top right corner</li>
          </ol>
        </div>

        <!-- Android Instructions (fallback) -->
        <div v-if="!isInstallable && !isIOS" class="instruction-section mb-3">
          <div class="subtitle-1 font-weight-bold mb-2">For Android:</div>
          <ol class="instruction-list">
            <li>Tap the menu button (⋮) in your browser</li>
            <li>Select "Add to Home screen" or "Install app"</li>
            <li>Follow the on-screen instructions</li>
          </ol>
        </div>

        <!-- Desktop Instructions (fallback) -->
        <div
          v-if="!isInstallable && !isMobile"
          class="instruction-section mb-3"
        >
          <div class="subtitle-1 font-weight-bold mb-2">For Desktop:</div>
          <ol class="instruction-list">
            <li>Click the install icon in your browser's address bar</li>
            <li>
              Or open the browser menu and select "Install Super Effective"
            </li>
          </ol>
        </div>

        <!-- Already Installed Message -->
        <div v-if="isStandalone" class="text-center">
          <v-icon color="success" large>mdi-check-circle</v-icon>
          <div class="subtitle-1 mt-2">App is already installed!</div>
        </div>

        <!-- Version History -->
        <v-divider class="my-4" dark></v-divider>
        <version-history />
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
import VersionHistory from './VersionHistory.vue'

export default {
  name: 'AddToPhoneInfo',

  components: {
    VersionHistory
  },

  data() {
    return {
      deferredPrompt: null,
      isInstallable: false
    }
  },

  computed: {
    isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    },

    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    },

    isStandalone() {
      // Check if app is running in standalone mode (already installed)
      return (
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true
      )
    }
  },

  mounted() {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', this.handleInstallPrompt)

    // Check if app is already installable
    if (!this.isStandalone && !this.isIOS) {
      this.isInstallable = true
    }
  },

  beforeDestroy() {
    window.removeEventListener('beforeinstallprompt', this.handleInstallPrompt)
  },

  methods: {
    handleInstallPrompt(e) {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later
      this.deferredPrompt = e
      // Update UI to notify the user they can install the PWA
      this.isInstallable = true
    },

    async installPWA() {
      if (!this.deferredPrompt) {
        return
      }

      // Show the install prompt
      this.deferredPrompt.prompt()

      // Wait for the user to respond to the prompt
      await this.deferredPrompt.userChoice

      // Clear the deferredPrompt for the next time
      this.deferredPrompt = null
      this.isInstallable = false
    }
  }
}
</script>

<style scoped>
.noCap {
  text-transform: none !important;
}

.instruction-section {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 12px;
  border-radius: 4px;
}

.instruction-list {
  margin-left: 20px;
  line-height: 1.8;
}

.instruction-list li {
  margin-bottom: 8px;
}
</style>
