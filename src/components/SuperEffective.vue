<template>
  <v-row class="justify-center">
    <v-card max-width="500">
      <v-card-title class="justify-center black--text mb-2 mx-0 px-0">
        <h3>
          Welcome to Super Effective
        </h3>
      </v-card-title>
      <!-- </v-sheet> -->

      <v-card-subtitle class="mx-2 mx-2 black--text">
        <div class="my-0">
          Select the Pokemon's type and
          <br />
          Find out what it's weak to
        </div>
      </v-card-subtitle>

      <v-card-text>
        <SearchPokemon :name="name" @pokemonTypes="pokemonSelection" />
        <v-row class="justify-center">
          <span v-for="type in types" :key="type.name">
            <TypeIcon
              :type="type.name"
              :selected="isSelected(type.name)"
              :selectable="true"
              effectiveness=""
              @typeSelected="updateSelection"
            />
          </span>
        </v-row>
      </v-card-text>
      <v-card-actions></v-card-actions>
      <v-divider />
      <!-- Super effective -->
      <v-card tile color="elevation-0" class="pt-2 pb-6">
        <h2 class="dark--text">{{ selectedTypeString() }}</h2>
        <v-card-text>
          <v-row v-if="effectiveness" class="justify-center">
            <span v-for="type in Object.keys(effectiveness.max)" :key="type">
              <span v-if="type">
                <TypeIcon
                  :type="format(type)"
                  :selected="false"
                  effective-color="green darken-2"
                  :selectable="false"
                  effectiveness="4x"
                  @typeSelected="updateSelection"
                />
              </span>
            </span>

            <span v-for="type in Object.keys(effectiveness.super)" :key="type">
              <span v-if="type">
                <TypeIcon
                  :type="format(type)"
                  :selected="false"
                  :selectable="false"
                  effective-color="light-green"
                  effectiveness="2x"
                  @typeSelected="updateSelection"
                />
              </span>
            </span>
          </v-row>
        </v-card-text>
      </v-card>
      <!-- <v-card-actions></v-card-actions> -->
      <v-divider></v-divider>
      <!-- Resistances -->
      <v-expansion-panels tile accordion multiple flat>
        <v-expansion-panel>
          <v-expansion-panel-header
            ripple
            color="primary darken-1"
            class="text-center white--text"
          >
            <h2>Resistances</h2>
            <template v-slot:actions>
              <v-icon color="white">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-sheet color="secondary lighten-1">
            <v-expansion-panel-content>
              <v-card-text class="mt-4 px-0 mx-0">
                <v-row v-if="effectiveness" class="justify-center">
                  <!-- Loop No effect -->
                  <span
                    v-for="type in Object.keys(effectiveness.noEffect)"
                    :key="type"
                  >
                    <span v-if="type">
                      <TypeIcon
                        :type="format(type)"
                        :selected="false"
                        :selectable="false"
                        effective-color="blue-grey lighten-1"
                        effectiveness="No Effect"
                        @typeSelected="updateSelection"
                      />
                    </span>
                  </span>
                  <!-- Loop super Not very effect -->
                  <span
                    v-for="type in Object.keys(effectiveness.maxNotVery)"
                    :key="type"
                  >
                    <span v-if="type">
                      <TypeIcon
                        :type="format(type)"
                        :selected="false"
                        :selectable="false"
                        effective-color="pink darken-4"
                        effectiveness="0.25x"
                        @typeSelected="updateSelection"
                      />
                    </span>
                  </span>
                  <!-- Loop Not very effect -->
                  <span
                    v-for="type in Object.keys(effectiveness.notVery)"
                    :key="type"
                  >
                    <span v-if="type">
                      <TypeIcon
                        :type="format(type)"
                        :selected="false"
                        :selectable="false"
                        effective-color="deep-orange  darken-3"
                        effectiveness="0.5x"
                        @typeSelected="updateSelection"
                      />
                    </span>
                  </span>
                  <span v-if="selectedTypeString() === 'Select a Type'">
                    <v-card-text class="white--text text-h6">
                      Select a type or search for a Pokemon
                    </v-card-text>
                  </span>
                </v-row>
              </v-card-text>
            </v-expansion-panel-content>
          </v-sheet>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header color="secondary" ripple>
            <h2 class="text-center white--text">
              Try with your voice!
            </h2>
            <template v-slot:actions>
              <v-icon color="white">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-sheet color="secondary  lighten-1">
            <v-expansion-panel-content>
              <VoiceInfo />
            </v-expansion-panel-content>
          </v-sheet>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import util from '@/utils/effectiveness'
import lang from '@/utils/languageUtils'
import TypeIcon from './TypeIcon.vue'
import SearchPokemon from './SearchPokemon.vue'
import VoiceInfo from './VoiceInfo.vue'

export default Vue.extend({
  name: 'Dashboard',

  components: {
    TypeIcon,
    SearchPokemon,
    VoiceInfo
  },

  data: () => ({
    types: [
      { name: 'Fire', selected: false },
      { name: 'Water', selected: false },
      { name: 'Bug', selected: false },
      { name: 'Dark', selected: false },
      { name: 'Grass', selected: false },
      { name: 'Dragon', selected: false },
      { name: 'Electric', selected: false },
      { name: 'Fairy', selected: false },
      { name: 'Fighting', selected: false },
      { name: 'Flying', selected: false },
      { name: 'Ghost', selected: false },
      { name: 'Ground', selected: false },
      { name: 'Ice', selected: false },
      { name: 'Normal', selected: false },
      { name: 'Poison', selected: false },
      { name: 'Psychic', selected: false },
      { name: 'Rock', selected: false },
      { name: 'Steel', selected: false }
    ],
    effective: '',
    name: '',
    showResist: false,
    selected: [''],
    effectiveness: {
      max: {},
      super: {},
      notVery: {},
      maxNotVery: {},
      noEffect: {}
    },
    type1: true,
    type2: false
  }),

  methods: {
    pokemonSelection(types, name) {
      console.log('pokemonSelection')
      console.log(types)
      this.selected = types
      this.name = name
      // selected should always have 2
      if (this.selected.length === 1) {
        this.selected.push('')
      }
      this.findEffectiveness()
    },
    updateSelection(type) {
      // console.log(type);
      this.name = ''
      const index = this.selected.indexOf(type)

      // Deselect type
      if (index !== -1) {
        this.selected.splice(index, 1)

        // check for duplicates
        // if (index != -1) {}
        this.selected.push('')
        this.findEffectiveness()
        return
      }

      // Add a second type
      if (this.selected.length < 2) {
        this.selected.push(type)
      }
      // Two or more types is selected -> remove the first one
      else {
        this.selected.shift()
        this.selected.push(type)
      }

      this.findEffectiveness()

      this.$emit('SelectedTypes', this.selected)
    },
    isSelected(type) {
      return this.selected.includes(type)
    },

    findEffectiveness() {
      this.effectiveness = util.getEffectiveness(
        this.selected[1],
        this.selected[0]
      )
      // console.log(JSON.stringify(this.effectiveness))
    },
    format(type) {
      return type.charAt(0).toUpperCase() + type.substring(1)
    },

    selectedTypeString() {
      const selectedTypes = lang.addAnd(this.selected, false)
      const typeString = selectedTypes ? `${selectedTypes} is weak to` : ''
      const nameString = this.name ? `${this.name} is weak to` : ''
      if (!nameString && !typeString) {
        return 'Select a Type'
      }
      return nameString || typeString
    }
  }
})
</script>
