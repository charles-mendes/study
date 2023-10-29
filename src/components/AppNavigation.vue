<template>
    <v-navigation-drawer
        v-model="controller.drawer"
        location="left"
        permanent
    >
        <v-list
        :items="items"
        ></v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useControllerStore } from '@/stores/controller'
  
  const controller = useControllerStore()

  const items = ref([
      {
          title: 'Eventos',
          value: 'evento',
      },
      {
          title: 'Convidados',
          value: 'convidado',
      },
      {
          title: 'Relatórios',
          value: 'relatorios',
      },
  ]); 
</script>