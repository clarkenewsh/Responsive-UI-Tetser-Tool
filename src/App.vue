<template>
  <div id="app">
    <header>
      <h1>Responsive UI Tetser Tool</h1>
    </header>
    <main>
      <!-- displays multiple iframes (on the screen at the same time), which can allow the tester to view the inputted website at different resolutions. -->
      <ViewPorts />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import ViewPorts from './components/ViewPorts';
export default {
  name: 'App',
  components: {
    ViewPorts,
  }
}
</script>

<style>
body {
background: #1a202c;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f8;
  margin-top: 60px;
  background: #1a202c;
}
</style>
