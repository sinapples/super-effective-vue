<template>
  <v-card color="secondary px-0" dark tile>
    <v-sheet color="primary  ">
      <v-card-title class="justify-center text-h7  white--text">
        <div class="justify-center">
          <span class="justify-center line mr-2">Thank you for using </span>
          <span class="justify-center line">{{ appTitle }} </span>
        </div>
      </v-card-title>
    </v-sheet>

    <v-card-text class=" body-1 text-center px-0 mb-0">
      <v-container class="px-0">
        <v-row align="center" justify="center" no-gutters>
          <v-spacer />

          <v-col cols="auto">
            <v-list-item-avatar class="ma-3" size="125" right rounded>
              <v-img
                alt="Josh Lopez, developer of Super Effective"
                src="https://firebasestorage.googleapis.com/v0/b/super-effective-eea44.appspot.com/o/photo-squashed.JPG?alt=media&token=b55d8a0c-bacf-40df-901c-c084a183ced0"
              ></v-img>
            </v-list-item-avatar>
          </v-col>
          <v-col>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-start text-h5 mb-2">
                  Hi, I'm Josh!
                </v-list-item-title>
                <div class=" text-start  body-1">
                  I hope you found
                  <strong class="primary--text"> {{ appTitle }}</strong>
                  helpful!
                </div>
                <div class=" text-start  body-1"></div>
              </v-list-item-content>
            </v-list-item>
          </v-col>

          <v-spacer />
        </v-row>
      </v-container>
      <div class="white--text mb-0">
        <div>Support the development of {{ appTitle }} by</div>
        <div class="font-weight-bold primary--text pt-4">
          <v-icon class="mr-2">mdi-tea</v-icon>
          Buying me Bubble Tea!
          <v-icon class="ml-2">mdi-tea</v-icon>
        </div>
        <div class="mb-0">
          <strong> @sinapples </strong>on all platforms
          <p />
          <strong> Donate</strong> to me directly though
        </div>
      </div>
    </v-card-text>

    <v-card-actions class="pb-12 pl-1 mt-0 pt-0">
      <v-spacer />
      <v-btn
        color="blue lighten-2"
        class="mr-2"
        href="https://venmo.com/code?user_id=2003272562900992908"
        target="_blank"
        dark
        @click="trackDonationClick('venmo')"
      >
        Venmo
      </v-btn>
      <v-btn
        color="blue darken-1"
        class="mr-2"
        href="https://www.paypal.me/sinapples?locale.x=en_US"
        target="_blank"
        dark
        @click="trackDonationClick('paypal')"
      >
        PayPal
      </v-btn>
      <v-btn
        color="primary"
        class="mr-2"
        href="https://www.buymeacoffee.com/sinapples"
        target="_blank"
        @click="trackDonationClick('buymeacoffee')"
      >
        Buy Me Boba
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import { trackDonation } from '@/utils/analytics'

export default {
  computed: mapState('app', ['appTitle']),

  methods: {
    trackDonationClick(platform) {
      trackDonation(platform)
    }
  }
}
</script>

<style lang="scss" scoped>
span.line {
  display: inline-block;
}
</style>
