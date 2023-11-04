<template>
  <!-- <v-row>
    <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <br/>
    <p>
      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </p>
  </v-row> -->
  
  <div class="d-flex mb-6">
    <v-sheet class="ma-2 pa-2">
      <span class="title-main text-h5 ">
        Convidados
      </span>  
    </v-sheet>
    <v-sheet class="ma-2 pa-2">
      <v-btn color="primary" append-icon="mdi-plus" class="elevation-1">
        Adicionar Convidado
      </v-btn>
    </v-sheet>
    <v-sheet class="mt-2 ml-auto">
      <v-text-field
        hide-details
        class="elevation-1 mx-0 px-0 custom-search"
        placeholder="Pesquisar"
        append-inner-icon="mdi-magnify"
        variant="solo"
        clearable
      ></v-text-field>
    </v-sheet>
  </div>
  
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    item-value="name"
    class="elevation-1"
  ></v-data-table>
</template>

<style lang="scss">
  .custom-search {
    width: 250px;
    
  }
  /* .custom-search .v-input__control{
    height: 38px;
  }
  .custom-search.v-text-field .v-field__input{
    padding-top: 0px;
    padding-bottom: 10px;
  } */
  .title-main {
    color: var(--blue-custom);
  }
</style>

<script setup lang="ts">
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
