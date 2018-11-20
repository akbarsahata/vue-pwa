<template>
  <div class="fourth">
    <h1 class="uk-h1 uk-text-bold uk-text-italic">
      {{percentage}}%
    </h1>
    <p class="uk-text-center">
      jalanan hari ini<br>
      {{status}}
    </p>
    <button
      @click="pergi"
      class="uk-button"
      id="red">
      saya tetap pergi
    </button>
    <button
      @click="selesai"
      class="uk-button"
      id="grey">
      baik, saya tidak pergi
    </button>
  </div>
</template>

<script>
export default {
  props: ['percentage'],
  data () {
    return {
      status: ''
    }
  },
  created () {
    if (Number(this.percentage) > 50) {
      this.status = 'sedang berbahaya! ✋🏻'
    } else {
      this.status = 'aman untuk bepergian 👍🏻'
    }
  },
  methods: {
    pergi () {
      this.$router.push({
        path: '/fifth'
      })
    },
    selesai () {
      this.$router.push('/second')
    }
  }
}
</script>

<style scoped>
.fourth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  min-height: 100vh;
}
.fourth h1 {
  color: white;
  font-style: italic;
  font-size: 7em;
}
.fourth p {
  color: white;
  font-size: 1.3em;
  font-style: italic;
}
.fourth button {
  margin: 5px;
  min-width: 80%;
}
.fourth button#red {
  background-color: #ff001d;
  color: white;
  border: solid white 1px;
}
.fourth button#grey {
  background-color: #bcbabb;
  color: black
}
 </style>
