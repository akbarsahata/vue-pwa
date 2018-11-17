<template>
  <div class="registration">
    <h2 class="uk-h2">Hai, {{nama}}</h2>
    <p>Sudah tahu mau kemana hari ini?</p>
    <div class="uk-margin">
      <label for="">Cuaca</label>
      <input type="text" class="uk-input" disabled :value="cuaca">
    </div>
    <div class="uk-margin">
      <label for="">Bulan</label>
      <input type="text" class="uk-input" disabled :value="bulan">
    </div>
    <div class="uk-margin">
      <label for="">Waktu</label>
      <input type="text" class="uk-input" disabled :value="waktu">
    </div>
    <div class="uk-margin">
      <label for="">Merk Handphone</label>
      <input type="text" class="uk-input" disabled :value="deviceType">
    </div>
    <div class="uk-margin">
      <label for="">Usia</label>
      <input type="number" class="uk-input" v-model="toBeSubmitted.usia">
    </div>
    <div class="uk-margin">
      <label for="">Jenis Kelamin</label>
      <select v-model="toBeSubmitted.gender" class="uk-select">
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
    </div>
    <div class="uk-margin">
      <label for="">Profesi</label>
      <select v-model="toBeSubmitted.profesi" class="uk-select">
        <option v-for="p in profesi" :key="p" :value="p">{{p}}</option>
      </select>
    </div>
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
        <option value="Tidak Sendiri">Tidak Sendiri</option>
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
import Fingerprint2 from 'fingerprintjs2'
import UAParser from 'ua-parser-js'
import axios from 'axios'
export default {
  props: ['nama'],
  methods: {
    checkAndSend () {
      const valid = Object.keys(this.toBeSubmitted)
        .reduce(
          (isValid, key) =>
            isValid && String(this.toBeSubmitted[key]).length > 0,
          true
        )

      if (valid) {
        this.$router.push({
          path: '/third',
          query: {
            ...this.toBeSubmitted,
            cuaca: this.cuaca,
            bulan: this.bulan,
            waktu: this.waktu,
            handphone: this.deviceType
          }
        })
      } else {
        this.showAlert = true
      }
    },
    resetToBeSubmitted () {
      this.toBeSubmitted = {
        profesi: '',
        usia: '',
        gender: '',
        asal: '',
        tujuan: '',
        kendaraan: '',
        sendiri: '',
        atasan: '',
        bawahan: '',
        perawakan: '',
        merk: ''
      }
    },
    getFingerprint () {
      new Fingerprint2({
        preprocessor: (key, value) => {
          if (key === 'user_agent') {
            const parser = new UAParser(value)
            let model = parser.getDevice().model

            if (/^SM.*/gi.test(model)) model = 'Samsung'

            return model
          }
          return value
        }
      })
        .get((results, component) => {
          component.map(c => {
            if (c.key === 'user_agent') this.deviceType = c.value
          })
        })
    },
    getWeather () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = Math.round(position.coords.latitude)
            const long = Math.round(position.coords.longitude)

            try {
              const {
                data: {
                  currently: {
                    precipProbabily: hujan
                  }
                }
              } = await axios.get(`https://api.darksky.net/forecast/349e94c681005903f7b3cacebea186c8/${lat},${long}`, {
                'Access-Control-Allow-Origin': '*'
              })

              if (Number(hujan) > 0.75) {
                this.cuaca = 'Hujan'
              } else {
                this.cuaca = 'Tidak Hujan'
              }
            } catch (error) {
              console.error(error)
              this.cuaca = 'Tidak Hujan'
            }
          },
          (error) => {
            console.error(error)
            this.cuaca = 'Tidak Hujan'
          }
        )
      } else {
        this.cuaca = 'Tidak Hujan'
      }
    }
  },
  created () {
    setTimeout(this.getFingerprint, 1000)
    setTimeout(this.getWeather, 1000)
    const date = new Date()
    const time = date.getHours()
    this.bulan = this.bulanBulan[date.getMonth()]

    if (time >= 0 && time <= 6) this.waktu = 'Dini Hari'
    else if (time >= 7 && time <= 11) this.waktu = 'Pagi'
    else if (time >= 13 && time <= 16) this.waktu = 'Siang'
    else if (time >= 17 && time <= 90) this.waktu = 'Sore'
    else this.waktu = 'Malam'
  },
  data () {
    return {
      showAlert: false,
      deviceType: 'Mendeteksi handphone...',
      cuaca: 'Mencari tahu cuaca...',
      waktu: '',
      bulan: '',
      toBeSubmitted: {
        profesi: '',
        usia: '',
        gender: '',
        asal: '',
        tujuan: '',
        kendaraan: '',
        sendiri: '',
        atasan: '',
        bawahan: '',
        perawakan: '',
        merk: ''
      },
      profesi: [
        'Pelajar', 'Ibu Rumah Tangga', 'Karyawan', 'Penjaga Keamanan', 'Wiraswasta', 'Driver/Supir', 'Pegawai Negeri', 'Lainnya'
      ],
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
        'Mobil',
        'Motor',
        'Jalan Kaki'
      ],
      atasan: [
        'Hijab', 'Kaos', 'Sweater', 'Jaket', 'Kemeja', 'Polo'
      ],
      bawahan: [
        'Celana Panjang',
        'Celana Pendek',
        'Rok Panjang',
        'Rok Pendek'
      ],
      perawakan: [
        'Kurus',
        'Gemuk',
        'Sedang'
      ],
      merk: [
        'Honda Beat',
        'Honda Vario',
        'Honda Verza',
        'Honda Supra X',
        'Yamaha Mio',
        'Yamaha Jupiter MX',
        'Suzuki Satria Fu',
        'Honda Kharisma',
        'Toyota Yaris',
        'Toyota Innova',
        'Honda Civic',
        'Honda Jazz',
        'Honda Sienta',
        'Toyota Avanza',
        'Lainnya',
        'Tidak Berkendara'
      ],
      bulanBulan: [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
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
