<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-card max-width="500">
          <!-- <v-card-title>Select the Pokemon Type {{ selected }}</v-card-title> -->
          <h2>Select the Pokemon's Type</h2>
          <v-card-text class="align-center">
            <v-row>
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

          <!-- Super effective -->
          <h2>{{ selectedTypeString() }}</h2>
          <v-card-text>
            <v-row v-if="effectiveness">
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

              <span
                v-for="type in Object.keys(effectiveness.super)"
                :key="type"
              >
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

          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header class="text-center">
                <h2>See Resistances</h2>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card-text>
                  <v-row v-if="effectiveness">
                    <span
                      v-for="type in Object.keys(effectiveness.noEffect)"
                      :key="type"
                    >
                      <span v-if="type">
                        <TypeIcon
                          :type="format(type)"
                          :selected="false"
                          :selectable="false"
                          effective-color="blue-grey"
                          effectiveness="No Effect"
                          @typeSelected="updateSelection"
                        />
                      </span>
                    </span>
                    <span
                      v-for="type in Object.keys(effectiveness.notVery)"
                      :key="type"
                    >
                      <span v-if="type">
                        <TypeIcon
                          :type="format(type)"
                          :selected="false"
                          :selectable="false"
                          effective-color="red lighten-1"
                          effectiveness="0.5x"
                          @typeSelected="updateSelection"
                        />
                      </span>
                    </span>
                  </v-row>
                </v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import util from '@/utils/effectiveness'
import lang from '@/utils/languageUtils'
import TypeIcon from './TypeIcon.vue'

export default Vue.extend({
  name: 'Dashboard',

  components: {
    TypeIcon
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

    selected: [''],
    effectiveness: {
      max: {},
      super: {},
      notVery: {},
      noEffect: {}
    },
    type1: true,
    type2: false
  }),

  methods: {
    updateSelection(type) {
      // console.log(type);

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

      return selectedTypes ? `${selectedTypes} is weak to` : ''
    }
  }
})
</script>
