<template>
<div id="wrapper">
  <div class="LayoutDefault">
    
    
    <b-card     
    overlay title="Organization Name">
    <b-card-header header-tag="nav" >
    
      <b-nav card-header pill fill >
        <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
              <b-nav-item>  <router-link to="/">MISSION</router-link> </b-nav-item> 
              <b-nav-item>  <router-link to="/team">TEAM</router-link> </b-nav-item> 
              <b-nav-item>  <router-link to="/contact">SUPPORT US</router-link> </b-nav-item> 
             <b-nav-item align="float:right"> 
             <div style="float:right">       
                <facebook url="url" scale="2"></facebook>
                <email url="url" scale="2"></email>
                <whats-app url="url" scale="2"></whats-app>
                </div>
              </b-nav-item> 
           
              
      </b-nav>
    </b-card-header>

    <b-card-body>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
   
      <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
      <!--<router-view></router-view>-->
      <!-- Or if using Nuxt.js
      <nuxt-child></nuxt-child>
      -->
    </b-card-body>
    <b-card-footer>
    <div style="float:right">
    <facebook url="url" scale="2"></facebook>
                <email url="url" scale="2"></email>
                <whats-app url="url" scale="2"></whats-app>
    </div>
    </b-card-footer>
    
    

  </b-card>
  </div>
  </div>
</template>

<script>
import { Facebook,WhatsApp,Email } from 'vue-socialmedia-share';

export default {
  name: `LayoutDefault`,
  props: {
    url: String
  },
  data() {
    return {
      user: null,
    };
  },
 components:{Facebook,WhatsApp,Email },

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
#wrapper  {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #212931;
			background-image: url("../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../images/background-image.jpg");
			background-size: auto,								auto,														100% auto;
			background-position: center,								center,														top center;
			background-repeat: repeat,								no-repeat,													no-repeat;
			background-attachment: scroll,								scroll,														scroll;
			z-index: -3;
		}
    #wrapper.fade-in:before {
			pointer-events: none;
			-moz-transition: opacity 1s ease-in-out;
			-webkit-transition: opacity 1s ease-in-out;
			-ms-transition: opacity 1s ease-in-out;
			transition: opacity 1s ease-in-out;
			-moz-transition-delay: 0.75s;
			-webkit-transition-delay: 0.75s;
			-ms-transition-delay: 0.75s;
			transition-delay: 0.75s;
			background: #1e252d;
			content: '';
			display: block;
			height: 100%;
			left: 0;
			opacity: 0;
			position: fixed;
			top: 0;
			width: 100%;
		}

		body.is-preload #wrapper.fade-in:before {
			opacity: 1;
		}

</style>