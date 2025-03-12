<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="MadridRuffle"></v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-row>
        <v-col cols="2" offset="1">
          <participant-form></participant-form>
        </v-col>
        <v-col cols="4">
          <HelloWorld />
        </v-col>
        <v-col cols="2">
          <winners></winners>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  //
</script>
