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
      let score = 0
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
        const {
          data: {
            Results: {
              output1: output
            }
          }
        } = await axios.post(
          'https://ussouthcentral.services.azureml.net/workspaces/a1c1f3f3790c4771b088905031e7960d/services/63e7ea1e8b8d48fc89d32bef69c1a44c/execute?api-version=2.0&format=swagger',
          JSON.stringify(input),
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer MN4OhipQ0Pvy7NmKamBjevFuYUwlPm/jIzPV6N+JfKQXjiCdPauBoY5RMYO1VGg6NH7oBZ9pZi1ghkO6vn+uSA=='
            }
          }
        )

        score = output[0]['Scored Probabilities']
        score = Number(score)
        score = Math.round(score)
      } catch (error) {
        console.error(error)
      } finally {
        this.$router.push({
          path: '/fourth/' + score
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
