<template>
  <main>
    <v-card>
      <v-layout>
        <AppHeader/>
        <AppNavigation/>

        <v-main style="height: 500px;">
          <v-card-text>
            <!-- listar cadastros -->
            The navigation drawer will appear from the bottom on smaller size screens.
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </main>
</template>

<script setup lang="ts">
  import AppHeader from '@/components/AppHeader.vue'
  import AppNavigation from '@/components/AppNavigation.vue'
</script>
