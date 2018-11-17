<template>
  <div id="offcanvas-usage" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <h3>Jaga Jalan</h3>
      <hr>
      <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
        <li v-for="l in links" :key="l.p">
          <router-link @click="setActive" :to="l.p">{{l.n}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          p: '/',
          n: 'First'
        },
        {
          p: '/second/test',
          n: 'Second'
        },
        {
          p: '/third',
          n: 'Third'
        },
        {
          p: '/fourth/91',
          n: 'Fourth'
        },
        {
          p: '/fifth',
          n: 'Fifth'
        },
        {
          p: '/sixth',
          n: 'Sixth'
        }
      ]
    }
  },
  methods: {
    setActive () {
      window.UIKit.offcanvas('#offcanvas-usage').toggle()
    }
  }
}
</script>

<style scoped>
ul {
  font-size: 1.2em;
}
</style>
