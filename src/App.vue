<template>
  <div id="app">
    <RootHeader></RootHeader>
    <div class="container">
      <header class="page-header row">
        <h2>Olá!</h2>
      </header>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import RootHeader from './components/root/header.vue'

export default {
  name: 'App',
  components: { RootHeader }
}
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
