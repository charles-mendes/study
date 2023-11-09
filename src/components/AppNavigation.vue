<template>
    <v-navigation-drawer
        v-model="controller.drawer"
        location="left"
        temporary
    >
        <v-list>
            <v-list-item 
                v-for="item in items"
                :key="item.value"
                color="#0072bb"
                :title="item.title"
                :to="item.route"
            >
            </v-list-item>
        </v-list>
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
        route: 'evento'
      },
      {
        title: 'Convidados',
        value: 'convidado',
      },
      {
        title: 'Relatórios',
        value: 'relatorios',
        route: 'relatorio'
      },
  ]); 
</script>

<style scoped>
.v-list-item--variant-plain, .v-list-item--variant-outlined, .v-list-item--variant-text, .v-list-item--variant-tonal {
    color: #0072bb;
}
</style>