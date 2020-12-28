<template>
  <div id="app">
    <div id="nav">
      <router-link to="backoffice/users">Users</router-link> |
      <router-link to="backoffice/ucs">Ucs</router-link> |
      <router-link to="/atividades">Atividades</router-link> |
      <router-link to="/formula">Formula</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #FFAC4B;
}

#nav a.router-link-exact-active {
  color: #000000;
  opacity: 0.3;
}
</style>
