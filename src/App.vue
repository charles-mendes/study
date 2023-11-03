<template>
  <v-card>
    <v-layout>
      <v-app>
        <AppHeader/>
        <AppNavigation/>
          <v-main>
            <v-card-text style="margin-top: 10px">
              <RouterView />    
            </v-card-text>
          </v-main>
      </v-app>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
  import AppHeader from '@/components/AppHeader.vue'
  import AppNavigation from '@/components/AppNavigation.vue'
  import { RouterView } from 'vue-router'
</script>

<style>
  #app{
    grid-template-columns: auto;
    padding: 0px;
    margin: 0px;
    width: 100%;
    max-width: 100%;
  }
</style>
