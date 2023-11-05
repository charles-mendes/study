<template>
    <v-app-bar
      color="#0072bb"
      prominent
      class="elevation-0"
      height="78"
    >
        <!-- height="48" -->
        <v-app-bar-nav-icon 
          variant="text" 
          @click.stop="controller.drawer = !controller.drawer"
        >
        </v-app-bar-nav-icon>

        <v-app-bar-title>
          <p class="text-h5 font-weight-medium">CASA CIVIL</p> 
        </v-app-bar-title>

        <!-- <v-img src="../../public/images/casa_civil_tres.png" height="60" width="60"></v-img> -->
        
        <!-- <v-img src="../../public/images/casa_civil_logo_dois.png" height="256" width="99"></v-img> -->

        <v-spacer></v-spacer>

        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
              <v-btn
              variant="text"
              icon="mdi-dots-vertical"
              v-bind="props"
              >
              </v-btn>
          </template>

          <v-list>
              <v-list-item v-for="(item, index) in itemsPerfil" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
          </v-list>
        </v-menu>
    </v-app-bar>
</template>

<style>
  
  .v-img__img, .v-img__picture, .v-img__gradient, .v-img__placeholder, .v-img__error{
    max-width: 128px !important;
    margin-left: 35px !important;
  }
</style>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useControllerStore } from '@/stores/controller'
  
  const controller = useControllerStore()
  const itemsPerfil = ref([
    {
      title: 'Sair',
      value: 'sair',
    }
  ])
</script>