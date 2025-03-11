<template>
    <v-textarea label="Participantes" v-model="text" @update:modelValue="onChange" rows="20"></v-textarea>
</template>

<script setup lang="ts">
import {useAppStore} from '@/stores/app';
const store = useAppStore();
const text = ref("")
const onChange = ()=>{
  store.parseText(text.value)
}
</script>

<style>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
