<template>
  <span>
    <span v-if="refreshingApp">
      <v-btn class="refresh-btn" color="secondary" small :ripple="false">
        Loading
      </v-btn>
    </span>
    <span v-else>
      <v-btn
        class="refresh-btn"
        color="secondary"
        small
        @click="$emit('refresh')"
      >
        Update <v-icon small class="pl-2">mdi-update</v-icon>
      </v-btn>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    refreshingApp: Boolean
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  display: inline-block;
  border-radius: 4px;

  .refresh-btn {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
