<template>
  <AppHeader/>
  <AppNavigation/>

  <!-- <v-row class="d-flex flex-column align-center justify-center" style="min-height: 300px;"> -->

    <p class="text-h5 mb-6 mt-6">Convidados</p>

    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="desserts"
      item-value="name"
      class="elevation-1"
      style="width: 100%;"
    ></v-data-table>
  <!-- </v-row> -->
</template>

<script setup lang="ts">
  import AppHeader from '@/components/AppHeader.vue'
  import AppNavigation from '@/components/AppNavigation.vue'

  import { ref } from 'vue'

  const itemsPerPage = ref(10)
  const headers = ref([
    {
      title: 'Dessert (100g serving)',
      align: 'start',
      sortable: false,
      key: 'name',
    },
    { title: 'Calories', align: 'end', key: 'calories' },
    { title: 'Fat (g)', align: 'end', key: 'fat' },
    { title: 'Carbs (g)', align: 'end', key: 'carbs' },
    { title: 'Protein (g)', align: 'end', key: 'protein' },
    { title: 'Iron (%)', align: 'end', key: 'iron' },
  ])
  const desserts = ref([
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1',
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0',
    },
  ])
</script>
