<template>
  <div id="app">
  <header>
  <nav>
  <ul>
  <li class="nav-item">
     <img class="logo" src="./assets/bug.jpg" alt="A logo of a bug" /> BugTracker
   </li>
  </ul>
  </nav>
  </header>
    <main>
    <ListBugs />
    </main>
  </div>
</template>

<script>
import HomePage from './home/HomePage.vue';
import ListBugs from './crud/Bugs.vue';

export default {
  name: 'app',
  components: {
    ListBugs,
  },
};
</script>

<style>
body {
   background: #044000;
   background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  background-color: white;
  padding: 30px;
  width: 1024px;
  min-height: 300px;
}
header {
  margin: 0 auto;
  width: 1084px;
  background-color: white;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
ul {
  padding: 3px;
  display: flex;
}
.logo{
  vertical-align: middle;
  height: 30px;
}
</style>

