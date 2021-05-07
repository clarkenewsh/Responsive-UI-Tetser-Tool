<template>
  <div id="app">
    <header>
      <h1>Responsive UI Tetser Tool</h1>
    </header>
    <main>
      <h3>What to do</h3>
      <p>To check the repsonsiveness of your website click the link below each viewport and wait for your site to show in the viewport </p>
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
  color: #e2e8f0;
  margin-top: 60px;
}

h3, p {
  color: #a9b6cc;
}

</style>
