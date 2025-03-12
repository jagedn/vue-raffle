// Utilities
import { defineStore } from 'pinia'

const randomColor= ()=>{
  return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}

const odd = '#7d7db3';//randomColor();
const even = '#c92729';//randomColor();

const bgodd = '#f7aab3';
const bgeven = '#b7acb3';

export const useAppStore = defineStore('app', () => {
  const participants = ref([
  ])

  function removeParticipant(p) {
    participants.value = participants.value.filter(function(e) {
      return e.id !== p.id
    })
  }

  function add(l){
    const idx = participants.value.length;
    participants.value.push({ id: idx, value: l.trim(), bgColor: idx%2==0?bgeven:bgodd, color: idx%2==0?even:odd })
  }

  function reset(){
    participants.value = []
  }

  const pickOne = computed(()=>{
    return Math.floor(Math.random() * participants.value.length) + 1
  })

  return { participants, removeParticipant, pickOne, add, reset }
});
