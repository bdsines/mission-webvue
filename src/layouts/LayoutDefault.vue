<template>
  <div >
  <b-container id="wrapper">
    <div class="LayoutDefault">
      <b-card
        overlay
        title="MISSION SHE"
        sub-title="subtitle"
        bg-variant="dark"
        text-variant="white"
        header-bg-variant="transparent"
        header-text-variant="white"
      >
        <b-card-header header-tag="nav" header-text-variant="white" header-bg-variant="transparent" header-class="navheader">
          <b-nav card-header pill fill variant="faded" type="light" >
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item active>
              <router-link to="/">MISSION</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link color="white" to="/team">TEAM</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/contact">SUPPORT US</router-link>
            </b-nav-item>
            <b-nav-item align="float:right">
                <facebook url="url" scale="2" style="padding-right: 10px;"></facebook>
                <email url="url" scale="2" style="padding-right: 10px;"></email>
                <whats-app url="url" scale="2"></whats-app>
            </b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body body-text-variant="light" body-bg-variant="transparent"
        >
          <main class="LayoutDefault__main">
            <slot />
          </main>

          <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
          <!--<router-view></router-view>-->
          <!-- Or if using Nuxt.js
      <nuxt-child></nuxt-child>
      -->
        </b-card-body>
        <!--b-card-footer>
          <div style="float:right" class="row">
            <div class="column-sm">
              <facebook background-color="white" url="url" scale="2"></facebook>
              <span></span>
            </div>
            <div class="column-sm">
              <email url="url" scale="2"></email>
              <span></span>
            </div>
            <div class="column-sm">
              <whats-app url="url" scale="2"></whats-app>
              <span></span>
            </div>
          </div>
        </b-card-footer-->
      </b-card>
    </div>
    </b-container>
  </div>
  
</template>

<script>
import { Facebook, WhatsApp, Email } from "vue-socialmedia-share";

export default {
  name: `LayoutDefault`,
  props: {
    url: String,
  },
  data() {
    return {
      user: null,
    };
  },
  components: { Facebook, WhatsApp, Email },

  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `John Doe` };
    }, 2000);
  },
};
</script>

<style lang="scss">
.LayoutDefault {
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
}
#wrapper {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: 100%;
  background-color: #212931;
  background-blend-mode: normal;

  background-image: url("../images/overlay.png"),
    linear-gradient(to right, black, transparent 60%),
    url("../images/adult-art-baby-black-background-208188.jpg");
  background-size: 100%, 100% auto, 100%;
  background-position: center, center, top center;
  background-repeat: repeat, no-repeat, no-repeat;
  background-attachment: scroll, scroll, scroll;
  z-index: -3;
}
navheader{
  color: white;
  z-index: 3;
}

</style>
