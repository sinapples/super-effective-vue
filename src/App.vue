<template>
  <v-app>
    <div id="app">
      <nav-bar></nav-bar>
      <div class="space">
        <router-view />
      </div>

      <new-content-available-toastr
        v-if="newContentAvailable"
        class="new-content-available-toastr"
        :refreshing-app="refreshingApp"
        @refresh="serviceWorkerSkipWaiting"
      ></new-content-available-toastr>

      <cookie-consent></cookie-consent>
    </div>
  </v-app>
</template>
<script>
import NavBar from '@/components/NavBar'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import CookieConsent from '@/components/CookieConsent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { NavBar, NewContentAvailableToastr, CookieConsent },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['refreshingApp'])
  },
  methods: mapActions('app', ['serviceWorkerSkipWaiting'])
}
</script>

<style lang="scss">
.space {
  padding-top: 55px;
}
body {
  margin: 0;

  a {
    font-weight: 500;
    text-decoration: none;
  }

  #app {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #2c3e50;

    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .main-wrapper {
      margin-top: 3.6rem;
      padding: 20px;

      .page-wrapper {
        width: 60%;
        margin: auto;

        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
