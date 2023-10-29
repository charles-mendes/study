<template>
  <main>
    <v-card>
      <v-layout>
        <v-app-bar
          color="primary"
          prominent
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>LOGO</v-toolbar-title>

          <v-spacer></v-spacer>

          <!-- <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->

          <v-menu
            open-on-hover
          >
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

        <v-navigation-drawer
          v-model="drawer"
          location="left"
          permanent
        >
          <v-list
            :items="items"
          ></v-list>
        </v-navigation-drawer>

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
  import { ref } from 'vue'
  const drawer = ref(true)
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
  const itemsPerfil = ref([
    {
      title: 'Sair',
      value: 'sair',
    }
  ]);
</script>
