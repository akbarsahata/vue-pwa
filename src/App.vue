<template>
  <div id="app">
    <navbar :title="title" :burger="burger"/>
    <router-view  @updateTitle="updateTitle" @login="hideBurger"/>
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
      title: 'COMMUTE POINTS',
      burger: true
    }
  },
  methods: {
    updateTitle (newTitle) {
      this.title = newTitle
    },
    hideBurger (value) {
      this.burger = value
    }
  }
}
</script>

<style>

</style>