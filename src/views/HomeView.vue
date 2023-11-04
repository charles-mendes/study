<template>

  <span class="title-main text-h5 ">
    Convidados
  </span>

  <div class="d-flex mb-6">
    <v-sheet class="ma-2 pa-2">
      <v-btn color="red-darken-1" flat class="elevation-0" :ripple="false" block rounded="xl" size="small" append-icon="mdi-trash-can">
        Inativar Selecionados
      </v-btn>
    </v-sheet>
    <v-sheet class="ma-2 pa-2">
      <v-btn color="primary" flat class="elevation-0" :ripple="false" block rounded="xl" size="small" append-icon="mdi-plus">
        Adicionar Convidado
      </v-btn>
    </v-sheet>
    <v-sheet class="mt-2 ml-auto ">
      <v-select
        class="custom-search"
        clearable
        placeholder="Filtro"
        :items="itemsConvidados"
      ></v-select>
    </v-sheet>
    <v-sheet class="mt-2 ml-5">
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
    v-model="selected"  
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    item-value="id"
    class="elevation-1"
    show-select
  >
    <template v-slot:item.acoes="{ item }">
      <div class="d-flex">
        <v-sheet class="ma-1">
          <v-btn color="primary" flat class="elevation-0" :ripple="false" block rounded="xl" size="small" @click="editar" append-icon="mdi-pencil">
            Editar
          </v-btn>
        </v-sheet>
        <v-sheet class="ma-1">
          <v-btn color="primary" flat class="elevation-0" :ripple="false" block rounded="xl" size="small" @click="excluir" append-icon="mdi-trash-can">
            Excluir
          </v-btn>
        </v-sheet>
      </div>
    </template>
  </v-data-table>
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

  const editar = () => (console.log('editar'))
  const excluir = () => (console.log('editar'))
</script>
