<template>
  <span>
    <v-card :color="getColor()" :ripple="true" @click="onClick">
      <v-img
        alt="Pokeball Logo"
        class="shrink mr-2"
        contain
        :src="require('@/assets/type-icons/Type_' + type + '.png')"
        transition="scale-transition"
        width="65"
      />

      <span :style="textColor()">
        {{ type }}
      </span>
      <div v-if="effectiveness" :style="textColor()">{{ effectiveness }}</div>
    </v-card>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Dashboard',

  components: {},

  props: {
    type: String,
    selected: Boolean,
    effectiveColor: String,
    selectable: Boolean,
    effectiveness: String
  },

  data: () => ({
    img: '@/assets/type-icons/Type_Fire.png',
    color: ''
  }),

  mounted() {
    if (this.type) {
      // const fileName =
      // this.type.charAt(0).toUpperCase() + this.type.substring(1)
      this.img = '@/assets/type-icons/Type_Fire.png'

      console.log()
    }
  },

  methods: {
    onClick() {
      if (this.selectable) {
        this.$emit('typeSelected', this.type)
      }
    },
    getColor() {
      let ret = ''
      if (this.effectiveColor) {
        ret = this.effectiveColor
      } else if (this.selected) {
        ret = 'blue'
      }

      return ret
      // return this.effectiveColor
      //   ? this.effectiveColor
      //   : this.selected
      //   ? 'blue'
      //   : ''
    },

    textColor() {
      return this.selected || this.effectiveColor
        ? 'color:white'
        : 'color:black'
    }
  }
})
</script>
