<template>
  <v-row>
    <v-col cols="12">Ganadores</v-col>
    <v-col cols="12">
      <v-virtual-scroll :items="winners" :height="600">
        <template v-slot:default="{ item }">
          {{ item.value }}
        </template>
      </v-virtual-scroll>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {useAppStore} from '@/stores/app';
import {storeToRefs} from 'pinia';
const store = useAppStore();
const {winners} = storeToRefs(store)
</script>

<style>
</style>
