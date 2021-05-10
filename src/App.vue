<template>
  <div id="app">
    <header>
      <h1>Responsive UI Tetser Tool</h1>
    </header>
    <main>
      <h2>What to do</h2>
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
margin: 0 auto;
text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e2e8f0;
  margin-top: 60px;
}

h1 {
  padding-bottom: 50px;
}

h3, p {
  color: #a9b6cc;
}

header {
  border-bottom: 1px solid rgb(99, 99, 99);
  display: flex;
  justify-content: center;
}

main {
  margin: 60px 0px;
}

</style>
