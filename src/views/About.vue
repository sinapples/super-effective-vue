<template>
  <v-row class="justify-center">
    <v-card max-width="500px">
      <v-card-title>Thanks for using Super Effective </v-card-title>

      <v-card-text>
        Hi, I'm Josh!
        <p>
          If you like this app you can support me sending me some boba
        </p></v-card-text
      >

      <v-card-actions
        ><v-btn
          color="primary"
          block
          href="https://www.buymeacoffee.com/sinapples"
          target="_blank"
        >
          Buy me some boba?
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
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
          content: `${this.appTitle} home page`,
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
