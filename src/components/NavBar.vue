<template>
  <v-app-bar app color="primary">
    <v-img
      alt="Pokeball Logo"
      class="shrink mr-2"
      contain
      src="@/assets/pokeball-icon.png"
      transition="scale-transition"
      width="40"
    />
    <span class="title white--text">{{ appTitle }}</span>
    <v-spacer />

    <span v-if="newContentAvailable">
      <new-content-available-toastr
        :refreshing-app="refreshingApp"
        @refresh="serviceWorkerSkipWaiting"
      ></new-content-available-toastr>
    </span>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'

export default {
  components: { NewContentAvailableToastr },
  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('authentication', ['user']),
    ...mapState('app', [
      'networkOnLine',
      'appTitle',
      'appShortTitle',
      'refreshingApp'
    ])
  },
  methods: {
    ...mapActions('app', ['serviceWorkerSkipWaiting'])
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  a {
    display: flex;
    align-items: center;
  }

  .title-desktop {
    display: inline;
  }

  .title-mobile {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 0.7rem 0.7rem;

    .can-hide {
      display: none;
    }

    .title-desktop {
      display: none;
    }

    .title-mobile {
      display: block;
    }
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    position: relative;
  }

  .logo {
    height: 24px;
    padding-right: 8px;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: 1.5rem;
    top: 0.7rem;
    display: flex;

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;

      .nav-item {
        position: relative;
        display: inline-block;
        margin-left: 1.5rem;
        line-height: 2.2rem;

        &:first-child {
          margin-left: 0;
        }

        a {
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          color: white;
          border-color: #2c3e50;
          line-height: 1.4rem;
          display: inline-block;
          cursor: pointer;
        }

        @mixin activatedLink() {
          margin-bottom: -2px;
        }

        .router-link-active {
          @include activatedLink;
        }

        @media (hover) {
          :hover {
            @include activatedLink;
          }
        }
      }
    }
  }

  &.offline {
    .links .nav-links .nav-item a,
    .site-name {
      color: white;
    }
  }

  .user-picture {
    max-height: 32px;
    margin-left: 1.5rem;
    border-radius: 50%;
  }

  .offline-label {
    padding: 0px 10px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin-left: 1.5rem;
  }
}
</style>
