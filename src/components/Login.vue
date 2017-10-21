<template>
  <div class="login">
    <img src="../assets/commute-point.png" alt="" id="img-logo">
    <div class="buttons">
      <div @click="updateTitle('COMMUTE POINTS')">
        <router-link to="/app" class="uk-button uk-button-default">LOGIN</router-link>
      </div>
      <div @click="updateTitle('SIGNUP')">
        <router-link to="/registration" class="uk-button uk-button-secondary">SIGNUP</router-link>
      </div>
    </div>
    <div class="message">
      <p>Have a problem? Click <a href="#">here</a> for help</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateTitle (newTitle) {
      this.$emit('updateTitle', newTitle)
    }
  },
  created () {
    this.$emit('login', true)
  }
}
</script>

<style scoped>
img {
  padding: 1em;
}
a.uk-button {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.2em;
  box-shadow: 0 0 5px grey;
}
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.buttons {
  margin-top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.message {
  margin-top: 5%;
}
#img-logo {
  margin-top: 20%;
}
</style>
