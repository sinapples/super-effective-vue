<template>
  <v-card class="elevation-0" max-width="400px">
    <!-- <v-card-text class="pl-2 headerClass"> -->
    <h3>Have a Amazon Echo or Google Nest Speaker?</h3>
    <!-- </v-card-text> -->
    <v-card-text>
      <div class="body-1">
        "Alexa, Open Super Effective"
      </div>
      <div class="body-1">
        "Hey Google, Talk to Pokemon Types"
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        href="https://www.amazon.com/Sinapples-Super-Effective/dp/B08YRCS2LK"
        target="_blank"
        class="mr-2 noCap"
        color="white"
      >
        <v-icon class="mr-2" color="blue lighten-2">mdi-amazon-alexa</v-icon>
        Alexa</v-btn
      >
      <v-btn
        href="https://assistant.google.com/services/a/uid/00000016d8836bb4?hl=en-US"
        target="_blank"
        color="white"
        class="mr-2 noCap"
      >
        <!-- <v-icon class="mr-2">mdi-google-assistant</v-icon> -->
        <v-img
          contain="true"
          class="mr-2"
          max-height="24px"
          max-width="24px"
          src="@/assets/Google-Assisant.png"
        ></v-img>
        Google Assisant</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.noCap {
  text-transform: none !important;
}

.headerClass {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
