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
    'merk',
    'profesi',
    'usia',
    'gender',
    'cuaca',
    'bulan',
    'waktu',
    'handphone'
  ],
  created () {
    console.log('hem')
    setTimeout(async () => {
      await this.requestApi()
    }, 2000)
  },
  methods: {
    async requestApi () {
      console.log(this.handphone)
      let percentage
      try {
        const input = {
          Inputs: {
            input1: [
              {
                Kec_Origin: this.asal,
                Kec_Destination: this.tujuan,
                Bulan_Kejadian: this.bulan,
                Gender_Korban: this.gender,
                Sendiri_Tidak_Perjalanan: this.sendiri,
                Jenis_Kendaraan: this.kendaraan,
                Waktu_Perjalanan: this.waktu,
                Usia_korban: this.usia,
                Merk_handphone: this.handphone.split(' ')[0],
                Profesi: this.profesi,
                Atasan: this.atasan,
                Bawahan: this.bawahan,
                Perawakan: this.perawakan,
                Hujan_Cuaca: this.cuaca,
                Merk_Kendaraan: this.merk,
                Flag_Begal: '1'
              }
            ]
          },
          GlobalParameters: {}
        }
        console.log(JSON.stringify(input, null, 2))
        const {
          data: {
            score
          }
        } = await axios.post(
          'https://boiling-ridge-20676.herokuapp.com/ml',
          JSON.stringify(input),
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        percentage = score
      } catch (error) {
        console.error(error)

        percentage = 0
      } finally {
        this.$router.push({
          path: '/fourth/' + percentage
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
