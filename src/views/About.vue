<template>
  <v-container>
    <v-row class="justify-center">
      <support />
    </v-row>

    <v-row class="justify-center mt-4">
      <v-col cols="12" sm="10" md="8" lg="6">
        <version-history />
      </v-col>
    </v-row>

    <v-row class="justify-center mt-6">
      <v-col cols="12" class="text-center">
        <v-btn text small color="grey" to="/privacy">
          <v-icon small class="mr-1">mdi-shield-lock</v-icon>
          Privacy Policy
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Support from '@/components/Support.vue'
import VersionHistory from '@/components/VersionHistory.vue'
import { mapState } from 'vuex'

export default {
  components: { Support, VersionHistory },
  head() {
    return {
      title: {
        inner: 'Support & About',
        separator: '-',
        complement: 'Super Effective'
      },
      meta: [
        {
          name: 'description',
          content:
            'Support Super Effective development. Available on Alexa and Google Assistant for hands-free Pokemon type checking. Donate via Venmo, PayPal, or Buy Me a Coffee.',
          id: 'desc'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://super-effective.app/about'
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
