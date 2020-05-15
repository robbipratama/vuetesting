<template>
<div class="container">
  <div class="login-form">
      <div v-if="error">
          <b-alert show dismissible variant="danger">
            <b>{{error}}</b>
          </b-alert>
      </div><br><br>

      <form @submit.prevent="submit">
          <h2 class="text-center">LOGIN</h2>
          <div class="form-group mb-3" style="width:350px; margin:auto;">
              <input type="text" class="form-control" placeholder="Email" required="required" name="email" v-model="form.email">
          </div>
          <div class="form-group mb-3" style="width:350px; margin:auto;">
              <input type="password" class="form-control" placeholder="Password" required="required" name="password" v-model="form.password">
          </div>
          <div class="form-group mb-3" style="width:350px; margin:auto;">
              <button type="submit" class="button btn-block">Login</button>
          </div>
      </form>

      <p class="text-center"><router-link to="/register">Create an Account →</router-link></p>
  </div><br><br>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: 'Home' })
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>

<style>
  .button {
    background-color: black;
    color: white;
    border-radius: 20px;
  }
  .button:hover {
    background-color: #555;
    border-color: black;
    color: white;
    border-radius: 20px;
  }
  .text-center {
    color: black;
  }
</style>
