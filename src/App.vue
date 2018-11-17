<template>
  <div id="app">
    <navbar :title="title"/>
    <router-view    
      @updateTitle="updateTitle" 
      @login="hideBurger"
      @firstNext="setNama"
      @reqApi="modelDebugger"/>
    <offcanvas @updateTitle="updateTitle"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Offcanvas from '@/components/Offcanvas'

export default {
  name: 'app',
  components: {
    Navbar,
    Offcanvas
  },
  data () {
    return {
      title: 'JAGA JALAN',
      burger: true,
      nama: ''
    }
  },
  methods: {
    updateTitle (newTitle) {
      this.title = newTitle
    },
    hideBurger (value) {
      this.burger = value
    },
    setNama (nama) {
      this.nama = nama
    },
    modelDebugger (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>