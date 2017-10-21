<template>
  <div class="registration">
    <h1 class="uk-h1">Registration</h1>
    <form action="#">
       <div class="uk-margin">
        <input class="uk-input" type="text" placeholder="Username">
      </div>
      <div class="uk-margin">
        <input class="uk-input" type="password" placeholder="Password">
      </div>
      <div class="uk-margin">
        <input class="uk-input" type="password" placeholder="Confirm Password">
      </div>
      <div class="uk-margin">
        <input class="uk-input" type="number" placeholder="KMT Number">
      </div>
      <div class="uk-margin" id="regis-button">
        <router-link to="/" class="uk-button uk-button-danger uk-button-large">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  created () {
    this.$emit('login', true)
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
button {
  box-shadow: 0 0 5px grey;
}
.registration {
  padding: 1em;
}
#regis-button {
  display: flex;
  justify-content: flex-end;
}
</style>
