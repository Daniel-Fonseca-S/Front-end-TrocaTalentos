<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="header_app">Troca Talentos</div>
  </header>
  <div class="body_layout">
    <RouterView />
  </div>
</template>

<style>
.body_layout {
  background-color: #e9e9e9;
}
.header_app {
  height: 10vh;
  box-shadow: 0px 4px 16px 5px rgba(0,0,0,0.33) !important;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-weight: 600;
}
</style>
