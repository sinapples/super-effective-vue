<template>
  <div>
    <v-container>
      <v-row class="text-center ">
        <v-col>
          <SuperEffective />
        </v-col>
      </v-row>
    </v-container>
    <Support />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SuperEffective from './SuperEffective.vue'
import Support from './Support.vue'

export default Vue.extend({
  name: 'Dashboard',
  components: {
    SuperEffective,
    Support
  },
  data: () => ({})
})
</script>
