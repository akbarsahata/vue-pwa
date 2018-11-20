<template>
  <div class="login">
    <div class="uk-margin">
      <p>Halo, boleh tahu nama kamu siapa?</p>
      <input 
        type="text" 
        class="uk-input"
        @keydown="hideMessage"
        v-model="nama">
    </div>
    <div class="uk-margin">
      <p for="">Usia</p>
      <input type="number" class="uk-input" v-model="usia" @keydown="hideMessage">
    </div>
    <div class="uk-margin">
      <p for="">Jenis Kelamin</p>
      <select v-model="gender" class="uk-select" @change="hideMessage">>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
    </div>
    <div class="uk-margin">
      <p for="">Profesi</p>
      <select v-model="profesi" class="uk-select" @change="hideMessage">>
        <option v-for="p in listprofesi" :key="p" :value="p">{{p}}</option>
      </select>
    </div>
    <div class="uk-margin">
      <div class="uk-alert-danger" uk-alert v-if="validate">Data Belum Lengkap!</div>
    </div>
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
      usia: '',
      gender: '',
      profesi: '',
      validate: false,
      listprofesi: [
        'Pelajar', 'Ibu Rumah Tangga', 'Karyawan', 'Penjaga Keamanan', 'Wiraswasta', 'Driver/Supir', 'Pegawai Negeri', 'Lainnya'
      ]
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
      if (!this.usia) {
        this.validate = true
        return
      }
      if (!this.gender) {
        this.validate = true
        return
      }
      if (!this.profesi) {
        this.validate = true
        return
      }
      window.localStorage.setItem('nama', this.nama)
      window.localStorage.setItem('usia', this.usia)
      window.localStorage.setItem('gender', this.gender)
      window.localStorage.setItem('profesi', this.profesi)

      this.$router.push({
        path: '/second/'
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
  margin-top: -56px;
}
.uk-margin {
  width: 100%;
  margin: 0;
}
.uk-margin p {
  margin: 0;
  padding: 0;
  text-align: left;
}
.uk-margin input {
  min-width: 100%;
}
</style>
