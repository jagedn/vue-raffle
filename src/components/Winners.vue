<template>
  <v-row>
    <v-col cols="12">Ganadores</v-col>
    <v-col cols="12">
      <v-list :items="winners"
              item-title="value"
              item-value="id"></v-list>
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
