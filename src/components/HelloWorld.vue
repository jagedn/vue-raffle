<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="outlined"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">MadridRaffle</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Sorteos made easy para la comunidad
              </div>
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <lucky-wheell @winner="weHaveWinner"></lucky-wheell>
        </v-col>

        <v-col cols="6">
          <participant-form></participant-form>
        </v-col>

      </v-row>

      <v-dialog max-width="500" v-model="dialog">
        <template v-slot:default="{ isActive }">
          <v-card title="Toma, toma, toma">
            <v-img
              color="surface-variant"
              height="200"
              src="@/assets/minions.gif"
              cover
            ></v-img>
            <v-card-text>
              {{congratulationsMsg}}
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useAppStore} from '@/stores/app';
const store = useAppStore();
const dialog = ref(false)
const congratulationsMsg = ref('')
const weHaveWinner = (winner)=>{
  congratulationsMsg.value = `Enhorabuena ${winner.value}, te ha tocado`
  dialog.value = true;
  store.removeParticipant(winner);
}
</script>
