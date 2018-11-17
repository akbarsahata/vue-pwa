<template>
  <div class="registration">
    <h2 class="uk-h2">Hai, {{nama}}</h2>
    <p>Sudah tahu mau kemana hari ini?</p>
    <div>
      <div>
        <label for="">Asal</label>
        <select v-model="toBeSubmitted.asal" class="uk-select">
          <option v-for="p in places" :key="p" :value="p">{{p}}</option>
        </select>
      </div>
      <div>
        <label for="">Tujuan</label>
        <select v-model="toBeSubmitted.tujuan" class="uk-select">
          <option v-for="p in places" :key="p" :value="p">{{p}}</option>
        </select>
      </div>
    </div>
    <div class="uk-margin">
      <label for="">Kendaraan</label>
      <select v-model="toBeSubmitted.kendaraan" class="uk-select">
        <option v-for="k in kendaraan" :key="k" :value="k">{{k}}</option>
      </select>
    </div>
    <div class="uk-margin">
      <label for="">Apakah kamu sendiri di perjalanan?</label>
      <select v-model="toBeSubmitted.sendiri" class="uk-select">
        <option value="Ya">Ya</option>
        <option value="Tidak">Tidak</option>
      </select>
    </div>
    <div class="uk-margin">
      <label for="">Boleh tahu atasan kamu sekarang?</label>
      <select v-model="toBeSubmitted.atasan" class="uk-select">
        <option v-for="a in atasan" :key="a" :value="a">{{a}}</option>
      </select>
    </div>
    <div class="uk-margin">
      <label for="">Boleh tahu bawahan kamu sekarang?</label>
      <select v-model="toBeSubmitted.bawahan" class="uk-select">
        <option v-for="b in bawahan" :key="b" :value="b">{{b}}</option>
      </select>
    </div>
    <div class="uk-margin">
      <label for="">Perawakanmu bagaimana?</label>
      <select v-model="toBeSubmitted.perawakan" class="uk-select">
        <option v-for="p in perawakan" :key="p" :value="p">{{p}}</option>
      </select>
    </div>
    <div class="uk-margin">
      <label for="">Merk kendaraan yang kamu gunakan?</label>
      <select v-model="toBeSubmitted.merk" class="uk-select">
        <option v-for="m in merk" :key="m" :value="m">{{m}}</option>
      </select>
    </div>
    <div class="uk-margin">
      <div class="uk-alert-danger" uk-alert v-if="showAlert">Harap lengkapi semua isian</div>
    </div>
    <div class="uk-margin" id="regis-button">
      <button
        @click="checkAndSend"
        class="uk-button uk-button-primary uk-button-small">
        Apakah saya aman?
      </button>
      <button
        @click="resetToBeSubmitted"
        class="uk-button uk-button-small">
        reset isian
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['nama'],
  methods: {
    checkAndSend () {
      const valid = Object.keys(this.toBeSubmitted)
        .reduce(
          (isValid, key) =>
            isValid && this.toBeSubmitted[key].length > 0,
          true
        )

      if (valid) {
        this.$router.push({
          path: '/third',
          query: {
            ...this.toBeSubmitted
          }
        })
      } else {
        this.showAlert = true
      }
    },
    resetToBeSubmitted () {
      this.toBeSubmitted = {
        asal: '',
        tujuan: '',
        kendaraan: '',
        sendiri: '',
        atasan: '',
        bawahan: '',
        perawakan: '',
        merk: ''
      }
    }
  },
  data () {
    return {
      showAlert: false,
      toBeSubmitted: {
        asal: '',
        tujuan: '',
        kendaraan: '',
        sendiri: '',
        atasan: '',
        bawahan: '',
        perawakan: '',
        merk: ''
      },
      places: [
        'Beji',
        'Bojongsari',
        'Cilodong',
        'Cimanggis',
        'Cinere',
        'Cipayung',
        'Limo',
        'Pancoran Mas',
        'Sawangan',
        'Sukmajaya',
        'Tapos'
      ],
      kendaraan: [
        'Jalan',
        'Sepeda Motor',
        'Mobil',
        'Kereta',
        'Lainnya'
      ],
      atasan: [
        'Hijab',
        'T-Shirt',
        'Kemeja',
        'Lainnya'
      ],
      bawahan: [
        'Celana Panjang',
        'Celana Pendek',
        'Rok Panjang',
        'Rok Pendek',
        'Lainnya'
      ],
      perawakan: [
        'Kurus',
        'Gemuk',
        'Sedang'
      ],
      merk: [
        'Tidak Berkendaraan',
        'Honda',
        'Yamaha',
        'Suzuki',
        'Lainnya'
      ]
    }
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
  justify-content: center;
}
#regis-button button {
  margin: 5px;
}
</style>
