<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">UAS VUE</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
              <router-link to="/" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/search" class="nav-link">Search</router-link>
            </li>
              <li class="nav-item">
              <router-link to="/favorit" class="nav-link">Favorit</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/kategori" class="nav-link">Kategori</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ingredient" class="nav-link">Ingredient</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/area" class="nav-link">Area</router-link>
            </li>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="user.loggedIn == true">
          <b-nav-item>{{user.data.displayName}}</b-nav-item>
          <b-button class="btnn" pill variant="danger" @click.prevent="signOut">Sign out</b-button>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-else>
            <b-button class="btnn" pill variant="success" to="/login">Sign in</b-button>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import Footer from './components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: 'user'
    })
  },
  methods: {
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'Login'
          })
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #507396;
}
.navbar {
  background-color: black;
}
.navbar-brand {
    color: white;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: rgb(86, 175, 171);
}
.row-navbar {
    width: 100%;
    background-color: rgb(86, 175, 171);
}
</style>
