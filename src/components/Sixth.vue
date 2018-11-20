<template>
  <div class="sixth">
    <img src="/static/sixth.png" class="logo">
    <p class="uk-text-center uk-text-bold">Panic button telah diaktifkan</p>
    <p class="uk-text-center">
      tunggu beberapa saat polisi<br>
      akan segera membantu anda
    </p>
    <button
      @click="selesai"
      class="uk-button"
      id="red">
      saya sudah aman
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import { PANIC_URL } from '@/url.js'
export default {
  methods: {
    selesai () {
      this.$router.push({
        path: '/second'
      })
    }
  },
  async created () {
    await axios.post(PANIC_URL, {
      lat: window.localStorage.getItem('lat') || 1,
      long: window.localStorage.getItem('long') || 104
    })
  }
}
</script>

<style scoped>
.sixth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  min-height: 100vh;
}
.sixth h1 {
  color: white;
  font-style: italic;
  font-size: 7em;
}
.sixth p {
  color: white;
  font-size: 1.3em;
}
.sixth button {
  margin: 5px;
  min-width: 80%;
}
.sixth button#red {
  background-color: #ff001d;
  color: white;
  border: solid white 1px;
}
.sixth button#grey {
  background-color: #bcbabb;
  color: black
}
.sixth .logo {
  max-width: 30%;
}
 </style>
