<template>
  <div id="offcanvas-usage" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <h3>Commute Points</h3>
      <hr>
      <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
        <li @click="setActive('homeActive')"><router-link to="/app">Home</router-link></li>
        <li @click="setActive('challengeActive')"><router-link to="/challenge" @click="updateChl">Challenge</router-link></li>
        <li class="uk-nav-divider"></li>
      <li @click="setActive('loginActive')"><router-link to="/" @click="updateLogin">Login</router-link></li>
        <li @click="setActive('regisActive')"><router-link to="/registration" @click="updateSignup">Registration</router-link></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    setActive (menu) {
      switch (menu) {
        case 'homeActive':
          this.updateHome()
          break
        case 'challengeActive':
          this.updateChl()
          break
        case 'loginActive':
          this.updateLogin()
          break
        case 'regisActive':
          this.updateSignup()
          break
      }

      window.UIKit.offcanvas('#offcanvas-usage').toggle()
    },
    updateHome () {
      this.$emit('updateTitle', 'COMMUTE POINTS')
    },
    updateChl () {
      this.$emit('updateTitle', 'TRIP CHALLENGE')
    },
    updateLogin () {
      this.$emit('updateTitle', 'LOGIN')
    },
    updateSignup () {
      this.$emit('updateTitle', 'SIGNUP')
    }
  }
}
</script>

<style scoped>
ul {
  font-size: 1.2em;
}
</style>
