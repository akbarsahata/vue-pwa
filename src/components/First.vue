<template>
  <div class="login">
    <p>Halo, boleh tahu nama kamu siapa?</p>
    <div class="uk-alert-danger" uk-alert v-if="validate">Nama minimal 3 karakter</div>
    <input 
      type="text" 
      class="uk-input"
      @keydown="hideMessage"
      v-model="nama">
    <br>
    <button
      class="uk-button uk-button-secondary"
      @click="pressNext">
      Next
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nama: '',
      validate: false
    }
  },
  methods: {
    updateTitle (newTitle) {
      this.$emit('updateTitle', newTitle)
    },
    hideMessage () {
      this.validate = false
    },
    pressNext () {
      if (this.nama.length < 3) {
        this.validate = true
        return
      }
      this.$emit('firstNext', this.nama)
      this.$router.push({
        path: '/second/' + this.nama
      })
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  padding: 10px;
  padding-top: 0px;
  margin-top: -30px;
}
</style>
