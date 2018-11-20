<template>
  <div class="fifth">
    <button
      @click="selesai"
      class="uk-button"
      id="white">
      saya sudah sampai
    </button>
    <button
      @click="panicButton"
      class="uk-button"
      id="red">
      panic button
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
    if (Number(this.percentage) < 90) {
      this.status = 'sedang berbahaya!'
    } else {
      this.status = 'aman untuk bepergian'
    }
  },
  methods: {
    panicButton () {
      this.$router.push({
        path: '/sixth'
      })
    },
    selesai () {
      this.$router.push('/second')
    }
  }
}
</script>

<style scoped>
.fifth {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  min-height: 100vh;
}
.fifth h1 {
  color: white;
  font-style: italic;
  font-size: 7em;
}
.fifth p {
  color: white;
  font-size: 1.3em;
  font-style: italic;
}
.fifth button {
  margin: 5px;
  min-width: 80%;
}
.fifth button#red {
  background-color: #ff001d;
  color: white;
  border: solid white 1px;
}
.fifth button#white {
  color: grey;
  border: solid grey 1px;
  background-color: white;
}
 </style>
