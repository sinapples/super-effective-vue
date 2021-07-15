<template>
  <v-card color="secondary" dark>
    <v-sheet color="primary darken-1">
      <v-card-title class="justify-center text-h7  ">
        <div class="justify-center">
          <span class="justify-center line mr-2">Thank you for using </span>
          <span class="justify-center line">{{ appTitle }} </span>
        </div>
      </v-card-title>
    </v-sheet>

    <v-card-text class=" body-1 text-center ">
      <v-container>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12">
            <v-col cols="auto">
              <v-list-item-avatar class="ma-3" size="125" right rounded>
                <v-img
                  src="https://firebasestorage.googleapis.com/v0/b/pockets-check.appspot.com/o/1C377174-3F9A-4F03-B42A-C1E68C5855C5.JPG?alt=media&token=f086d377-a289-4db9-a6f1-5436d4df55fc"
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
          </v-col>
        </v-row>
      </v-container>
      <div class="white--text">
        <div>Support the development of {{ appTitle }} by</div>
        <div class="font-weight-bold primary--text pt-4">
          <span style="font-size:20px; color:black">🧋</span>
          Buying me Bubble Tea!
          <span style="font-size:20px; color:black">🧋</span>
        </div>
        <div>
          <p />
          <strong> Donate</strong> to me directly though <br />
          Venmo, Paypal, or Buy Me Boba
          <p />
        </div>
        <strong> @sinapples </strong>on all platforms
      </div>
    </v-card-text>

    <v-card-actions class="pb-8">
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
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
span.line {
  display: inline-block;
}
</style>
