<template>
    <v-textarea label="Participantes" v-model="text" @update:modelValue="onChange" rows="20"></v-textarea>
</template>

<script setup lang="ts">
import {useAppStore} from '@/stores/app';
const store = useAppStore();
const text = ref("")
const onChange = ()=>{
  const result = text.value.split("\n").reduce((a, c)=> {
    a[c] = a[c] || {count: 0};
    a[c].count +=1;
    return a;
  }, {});

  const duplicates = Object.entries(result)
    .filter(([k, v]) => v.count > 1 )
    .map(([e])=> e);
  if( duplicates.length ){
    alert("Meeccccc, hay nombres duplicados")
    return;
  }

  store.parseText(text.value)
}

const removeLine = (line)=>{
  text.value = text.value.toString().split("\n").filter(l=>l!==line).join("\n")
}
defineExpose({
  removeLine
});

</script>

<style>
</style>
