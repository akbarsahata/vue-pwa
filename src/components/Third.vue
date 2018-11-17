<template>
  <div class="third">
    <img src="/static/third.png" class="logo">
    <p class="uk-text-center">
      Sebentar ya, kami sedang menghitung<br>
      kemungkinanmu memperoleh pejalanan yang<br>
      aman dan nyaman
    </p>
    <img src="/static/loading.gif" class="loading">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: [
    'asal',
    'tujuan',
    'kendaraan',
    'sendiri',
    'atasan',
    'bawahan',
    'perawakan',
    'merk'
  ],
  created () {
    console.log('hem')
    setTimeout(async () => {
      await this.requestApi()
    }, 2000)
  },
  methods: {
    async requestApi () {
      try {
        await axios.post('https://api.tronalddump.io/search/quote?query=obama', {
          data: 'hem'
        })
      } catch (error) {
        console.error(error)
      } finally {
        this.$router.push({
          path: '/fourth/81'
        })
      }
    }
  }
}
</script>

<style scoped>
.third {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #429ef4;
  min-height: 100vh;
}
.third p {
  color: white;
}
.third .logo {
  max-width: 20%;
}
</style>
