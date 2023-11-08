<template>
  <v-container>
    <span class="title-main text-h5 ">
      Convidados
    </span>
    
    <v-data-table
      v-model="selected"  
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="desserts"
      item-value="id"
      class="elevation-1"
      show-select
      itemsPerPageText="Itens por página"
      :items-per-page-options="rows_per_page"
    >
      <template v-slot:top>
        <!-- style="background-color: black;" -->
        <div class="d-flex pb-2" align="center" justify="center">
          <v-sheet class=" d-flex pa-2" justify="center">
            <v-btn class="ma-2 pa-2 align-self-end" style="justify-content: center;" color="red-darken-1" flat :ripple="false" block rounded="xl" size="small" append-icon="mdi-trash-can">
              Inativar Selecionados
            </v-btn>
          </v-sheet>
          <v-sheet class="ma-2 pa-2 align-self-end">
            <v-btn class="" color="primary" flat :ripple="false" block rounded="xl" size="small" append-icon="mdi-plus">
              Adicionar Convidado
            </v-btn>
          </v-sheet>
          <v-sheet class="ma-2 pa-2 ml-auto ">
            <v-select
              class="elevation-0 ma-0 pa-0 custom-search"
              placeholder="Filtro"
              :items="itemsConvidados"
              variant="underlined"
              clearable
              hide-details
            ></v-select>
          </v-sheet>
          <v-sheet class="ma-2 pa-2 ml-5">
            <v-text-field
              class="elevation-0 ma-0 pa-0 custom-search"
              placeholder="Pesquisar"
              append-inner-icon="mdi-magnify"
              variant="underlined"
              clearable
              hide-details
            ></v-text-field>
          </v-sheet>
        </div>
      </template>
      
      <template v-slot:item.acoes="{ item }">
        <div class="d-flex">
          <v-sheet class="ma-1">
            <v-btn color="primary" flat :ripple="false" block rounded="xl" size="small" @click="editar" append-icon="mdi-pencil">
              Editar
            </v-btn>
          </v-sheet>
          <v-sheet class="ma-1">
            <v-btn color="red-darken-1" flat :ripple="false" block rounded="xl" size="small" @click="excluir" append-icon="mdi-trash-can">
              Excluir
            </v-btn>
          </v-sheet>
        </div>
      </template>

      

    </v-data-table>
  </v-container>
</template>

<style lang="scss">
  .custom-search {
    width: 250px;
    height: 60px;
  }

  /* .v-text-field--box .v-input__slot, .v-text-field--outline .v-input__slot{
    height: 48px !important;
  }  */

  .v-text-field--box .v-input__slot,
  .v-text-field--outline .v-input__slot {
    min-height: 30px !important;
    height: 30px !important;
    display: flex !important;
    align-items: center !important;
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

  const rows_per_page = ref([
    {value: 10, title: '10'},
    {value: 25, title: '25'},
    {value: 50, title: '50'},
    {value: 100, title: '100'}
  ]);

  const itemsPerPage = ref(10);
  const headers = ref([
    { title: 'Nome', align: 'start', sortable: false, key: 'nome', width: '50%'},
    { title: 'Cargo', align: 'start', sortable: false, key: 'cargo', width: '30%' },
    { title: 'Status', align: 'start', sortable: false, key: 'status', width: '10%' },
    { title: 'Ações', align: 'start', sortable: false, key: 'acoes', width: '10%' }
  ])
  const desserts = ref([
    {
      id: '1',
      nome: 'Charles Juan da Silva Mendes',
      cargo: 'Desenvolvedor',
      status: 'Ativo'
    },
    {
      id: '2',
      nome: 'Jose Carlos',
      cargo: 'Deputador PLDB',
      status: 'Ativo'
    },

  ])

  const itemsConvidados = ref([
    'Ativo', 'Inativo'
  ])

  const selected = ref([])

  function editar(){
    console.log('editar')
  }
  function excluir(){
    console.log('editar')
  }
  function previousPage(options){
    // Handle previous page action
    if (options.page > 1) {
      options.page--;
    }
  }

  function nextPage(options) {
    // Handle next page action
    if (options.page * options.itemsPerPage < options.itemsLength) {
      options.page++;
    }
  }
</script>
