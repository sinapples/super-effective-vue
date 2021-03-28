<template>
  <v-container>
    <v-row class="text-center ">
      <!-- <v-col class="mb-4" md="6" lg="6" xl="6" sm="12">
        <SuperEffective />
      </v-col> -->
      <v-col class="mb-4">
        <SuperEffective />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import SuperEffective from './SuperEffective.vue'

export default Vue.extend({
  name: 'Dashboard',
  components: {
    SuperEffective
  },
  data: () => ({})
})
</script>
