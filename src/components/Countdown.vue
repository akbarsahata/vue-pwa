<template>
  <div class="main">
    <div class="chl-header">
     <div class="uk-grid-small uk-child-width-auto" uk-grid :uk-countdown="countdown">
        <div>
          <div class="uk-countdown-number uk-countdown-hours"></div>hours
        </div>
        <div class="uk-countdown-separator">:</div>
        <div>
          <div class="uk-countdown-number uk-countdown-minutes"></div>minutes
        </div>
        <div class="uk-countdown-separator">:</div>
        <div>
          <div class="uk-countdown-number uk-countdown-seconds"></div>second
        </div>
      </div>
      <span class="location">You're at Stasiun Tebet</span>
      <span class="station">7 stations to go!</span>
    </div>
    <div class="chl-share">
      <a href="#">
        Share Challenge <i class="fa fa-share"></i>
      </a>
    </div>
    <div class="chl-details">
      <h1>Trip Challenge</h1>
      <h2>Beat the time!</h2>
      <div class="route">
        Stasiun UI - Stasiun Sudirman
        <br>
        &lt; 42 minutes
      </div>
      <span style="color:#08d5ce;margin-top:30px;">view weather &amp; traffic condition</span>
      <div class="buttons">
        <router-link to="/finished" class="uk-button uk-button-danger"><i class="fa fa-remove fa-2x"></i></router-link>
        <br>
        <span>Cancel</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      countdown: `date: ${moment().add(42, 'm').toISOString()}`
    }
  },
  created () {
    this.$emit('login', false)
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
.chl-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.5);
  color: red;
  padding-top: 1em;
  padding-bottom: 1em;
}
.chl-header span {
  color: black;
}
.chl-header span.location {
  font-size: 1.7em;
}
.chl-header span.station {
  font-size: 2.3em;
  font-weight: bold;
}
.chl-share {
  text-align: right;
  box-shadow: 0px 5px 3px grey;
  padding: 0.5em;
  font-size: 1.3em;
  font-weight: bold;
}
.chl-details {
  padding: 0.5em;
  padding-top: 2em; 
  text-align: center;
}
.chl-details h1,h2 {
  margin: 0 0 0.5em 0;
}
.chl-details .route {
  margin: 0 1em 0 1em;
  border: 1px solid goldenrod;
  box-shadow: 0 0 10px gold;
  background-color: rgba(250, 233, 25, 0.5);
  font-size: 1.5em;
  font-weight: bold;
  color: black;
  text-align: center;
}
.chl-details .buttons {
  margin-top: 30px;
}
.chl-details .buttons a {
  font-weight: bold;
  font-size: 1em;
  margin: 0 20px 0 20px;
  box-shadow: 0 0 5px grey;
}
.chl-details .buttons a.uk-button-danger {
  background-color: red;
  box-shadow: 0 0 10px grey;
  color: white;
  width: 50px;
  height: 50px;
  padding: 7px;
  border-radius: 50%;
}
</style>
