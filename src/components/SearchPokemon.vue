<template>
  <span>
    <v-autocomplete
      ref="combo"
      v-model="selection"
      spellcheck="false"
      name="pokemon"
      label="Pokemon Name"
      clearable
      filled
      :filter="filter"
      :menu-props="{
        maxHeight: 145
      }"
      :allow-overflow="false"
      :auto-select-first="true"
      color="black"
      rounded
      :items="pokemon"
      append-icon="mdi-pokeball"
      @keyup.enter="blur()"
      @change="blur()"
      @click:clear="clear()"
    ></v-autocomplete>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import pokedex from '@/utils/pokedex'
import { trackPokemonSearch } from '@/utils/analytics'

export default Vue.extend({
  name: 'SearchPokemon',

  components: {},

  props: {
    name: String
  },
  data: () => ({
    img: '@/assets/type-icons/Type_Fire.png',
    pokemon: [],
    selection: '',
    filter: (item, queryText, itemText) => {
      if (itemText) {
        return (
          itemText
            .toLocaleLowerCase()
            .indexOf(queryText.toLocaleLowerCase()) === 0
        )
      }
      return true
    }
  }),

  watch: {
    name(name) {
      this.selection = name
    },
    selection(selection) {
      if (selection) {
        const types = pokedex.getTypes(selection)
        this.$emit('pokemonTypes', types, selection)

        // Track Pokemon search in Google Analytics
        trackPokemonSearch(selection, types)
      }
    }
  },

  mounted() {
    this.pokemon = pokedex.allPokemon().sort()
  },

  methods: {
    blur() {
      this.$refs.combo.blur()
    },
    clear() {
      this.$emit('pokemonTypes', ['', ''], '')
    }
  }
})
</script>
