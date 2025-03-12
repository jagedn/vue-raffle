<template>
  <v-row>
    <v-col cols="12">
      <v-text-field label="Nombre" v-model="text" @keyup.enter="onKeyUp"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-virtual-scroll :items="participants" :height="600">
        <template v-slot:default="{ item }">
          <v-btn @click="removeMe(item)" icon="mdi-delete"></v-btn>{{ item.value }}
        </template>
      </v-virtual-scroll>
    </v-col>
    <v-col cols="12">
      <v-btn @click="reset">
        Reset
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {useAppStore} from '@/stores/app';
import {storeToRefs} from 'pinia';
const store = useAppStore();

const text = ref("")
const {participants} = storeToRefs(store)

function getDuplicates(arr, key) {
  return arr.filter((item, index, self) =>
      index !== self.findIndex((t) => (
        t[key] === item[key]
      ))
  );
}

function removeMe(current){
  store.removeParticipant(current)
}

const reset = ()=>{
  store.reset()
}

const onKeyUp = ()=>{
  store.add(text.value)
  const duplicates = getDuplicates(participants.value, 'value');
  if( duplicates.length ){
    alert("Meeccccc, hay nombres duplicados")
  }
  text.value = ""
}

</script>

<style>
</style>
