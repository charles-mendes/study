<template>
    <v-app-bar
      flat
      color="primary"
      prominent
      class="border-b"
    >
        <v-app-bar-nav-icon 
          variant="text" 
          @click.stop="controller.drawer = !controller.drawer"
        >
        </v-app-bar-nav-icon>

        <v-toolbar-title>LOGO</v-toolbar-title>

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
            <v-list-item
            v-for="(item, index) in itemsPerfil"
            :key="index"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
    </v-app-bar>
</template>

<style scoped>
  .v-toolbar__content > ::after{
    height: 48px !important;
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