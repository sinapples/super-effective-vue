<template>
  <v-card color="secondary" dark class="mt-4">
    <v-expansion-panels accordion flat>
      <v-expansion-panel>
        <v-expansion-panel-header class="text-center">
          <div class="text-center">
            <v-icon small class="mr-2">mdi-history</v-icon>
            <span class="font-weight-medium">Version History</span>
          </div>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-list color="secondary" dark>
            <v-list-item
              v-for="(update, index) in updates"
              :key="index"
              class="px-0"
            >
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  {{ update.date }}
                  <span v-if="update.version" class="ml-2 text-caption">
                    (v{{ update.version }})
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle class="white--text mt-1">
                  {{ update.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-if="updates.length === 0" class="px-0">
              <v-list-item-content>
                <v-list-item-subtitle class="white--text text-center">
                  No version history available
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: 'VersionHistory',

  data() {
    return {
      updates: []
    }
  },

  mounted() {
    this.loadUpdates()
  },

  methods: {
    async loadUpdates() {
      try {
        const response = await fetch('/updates.json')
        if (response.ok) {
          this.updates = await response.json()
        } else {
          console.error('Failed to load updates.json')
        }
      } catch (error) {
        console.error('Error loading version history:', error)
      }
    }
  }
}
</script>

<style scoped>
.v-expansion-panel-header {
  min-height: 48px;
}
</style>
