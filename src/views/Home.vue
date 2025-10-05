<template>
  <!-- <div class="page-wrapper"> -->
  <Dashboard />
  <!-- </div> -->
</template>

<script>
import { mapState } from 'vuex'
import Dashboard from '@/components/Dashboard.vue'

export default {
  components: {
    Dashboard
  },
  head() {
    return {
      title: {
        inner: 'Pokemon Type Weakness Calculator',
        separator: '-',
        complement: 'Super Effective'
      },
      meta: [
        {
          name: 'description',
          content:
            'Instantly find what types are super effective against any Pokemon. Search 1000+ Pokemon or select type combinations to discover weaknesses, resistances, and immunities.',
          id: 'desc'
        },
        {
          property: 'og:title',
          content: 'Super Effective - Pokemon Type Weakness Calculator'
        },
        {
          property: 'og:description',
          content:
            'Find Pokemon type weaknesses and resistances instantly. Search by Pokemon name or select types.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://super-effective.app/'
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
