<template>
  <nav class="uk-navbar uk-navbar-container uk-margin" uk-sticky="animation: uk-animation-slide-top">
    <div class="uk-navbar-left" v-if="!burger">
      <a class="uk-navbar-toggle" href="#offcanvas-usage" uk-toggle>
        <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left"></span>
      </a>
    </div>
    <div class="uk-navbar-right">
    </div>
    <div class="uk-navbar-center">
      <a href="" class="uk-navbar-item uk-logo">{{ title }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['title', 'burger'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
nav.uk-navbar {
  background-color: rgba(50,50,50, 1);
  color: white;
  box-shadow: 0 0 20px grey;
  height: 3.5em;
  margin: 0;
}
div.uk-sticky-placeholder {
  margin: 0;
  padding: 0;
}
a {
  color: white;
}
</style>
