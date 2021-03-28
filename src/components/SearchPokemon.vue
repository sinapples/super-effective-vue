<template>
  <span>
    <v-autocomplete
      v-model="selection"
      label="Pokemon Name"
      clearable
      filled
      color="black"
      rounded
      :items="pokemon"
      @click:clear="clear()"
    ></v-autocomplete>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import pokedex from '@/utils/pokedex'

export default Vue.extend({
  name: 'SearchPokemon',

  components: {},

  props: {
    name: String
  },
  data: () => ({
    img: '@/assets/type-icons/Type_Fire.png',
    pokemon: [],
    selection: ''
  }),

  watch: {
    name(name) {
      this.selection = name
    },
    selection(selection) {
      if (selection) {
        const types = pokedex.getTypes(selection)
        console.log(types)
        this.$emit('pokemonTypes', types, selection)
      }
    }
  },

  mounted() {
    this.pokemon = pokedex.allPokemon()
  },

  methods: {
    clear() {
      this.$emit('pokemonTypes', ['', ''], '')
    },
    onClick() {
      if (this.selectable) {
        this.$emit('typeSelected', this.type)
      }
    },
    getColor() {
      return pokedex.getTypes('Pikachu')

      // return this.effectiveColor
      //   ? this.effectiveColor
      //   : this.selected
      //   ? 'blue'
      //   : ''
    }
  }
})
</script>
