<template>
  <v-container>
    <v-row class="justify-center">
      <v-card max-width="500px">
        <v-card-title class="justify-center"
          >Thanks for using Super Effective
        </v-card-title>

        <v-card-text class="justify-center">
          Hi, I'm Josh!
          <p />
          I hope you found this app helpful!
          <p />
          If you like this app and want to support the devlopment<br />

          <span style="font-size:20px; color:black">🧋</span>
          You can buy me some bubble tea!
          <span style="font-size:20px; color:black">🧋</span>

          <p />
          Donate to me directly thru Venmo, Paypal, Buy me a boba
          <p />
          @Sinapples on all platforms
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue lighten-2"
            class="mr-2"
            href="https://venmo.com/code?user_id=2003272562900992908"
            target="_blank"
            dark
          >
            Venmo
          </v-btn>
          <v-btn
            color="blue darken-1"
            class="mr-2"
            href="https://www.paypal.me/sinapples?locale.x=en_US"
            target="_blank"
            dark
          >
            PayPal
          </v-btn>
          <v-btn
            color="primary"
            class="mr-2"
            href="https://www.buymeacoffee.com/sinapples"
            target="_blank"
          >
            Buy Me Boba
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `Support the development of this app with boba`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
</style>
