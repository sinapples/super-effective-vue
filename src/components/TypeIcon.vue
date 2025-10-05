<template>
  <span>
    <v-card
      :color="getColor()"
      :ripple="true"
      tile
      class="pb-1"
      @click="onClick"
    >
      <v-img
        :alt="type + ' type icon'"
        class="shrink icon"
        contain
        :src="require('@/assets/type-icons/Type_' + type + '.png')"
        transition="scale-transition"
        width="75"
        height="85"
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
      this.img = '@/assets/type-icons/Type_Fire.png'
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
    },

    textColor() {
      return this.selected || this.effectiveColor
        ? 'color:white'
        : 'color:black'
    }
  }
})
</script>

<style scoped></style>
