<template>
  <div id="app">
  <!--<Introduction msg="Introduction"/>
  <Contact msg="Welcome to Your Vue.js App"/>
  -->
  <b-card title="Organization Name" no-body overlay>
  
    <b-card-header header-tag="nav" >
    <!--<b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>-->
      <b-nav card-header pill fill >
        <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
              <b-nav-item>  <router-link to="/">MISSION</router-link> </b-nav-item> 
              <b-nav-item>  <router-link to="/team">TEAM</router-link> </b-nav-item> 
              <b-nav-item>  <router-link to="/contact">SUPPORT US</router-link> </b-nav-item> 
              <b-nav-item align="right">        <facebook :url="url" scale="2"></facebook>
              <email :url="url" scale="2"></email>
              <whats-app :url="url" scale="2"></whats-app>
              </b-nav-item> 
           
              
      </b-nav>
    </b-card-header>

    <b-card-body>
      <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
      <router-view></router-view>
      <!-- Or if using Nuxt.js
      <nuxt-child></nuxt-child>
      -->
    </b-card-body>
    <b-card-footer><facebook :url="url" scale="2"></facebook>
              <email :url="url" scale="2"></email>
              <whats-app :url="url" scale="2"></whats-app></b-card-footer>

    

  </b-card>
</div>
  
</template>

<script>
import { Facebook,WhatsApp,Email } from 'vue-socialmedia-share';

export default {
  name: 'App',
  components:{Facebook,WhatsApp,Email }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
		color: #ffffff;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-transition: -moz-transform 1s ease, opacity 1s ease;
		-webkit-transition: -webkit-transform 1s ease, opacity 1s ease;
		-ms-transition: -ms-transform 1s ease, opacity 1s ease;
		transition: transform 1s ease, opacity 1s ease;
		background: rgba(255, 255, 255, 0.175);
		height: 4rem;
		line-height: 4rem;
		margin: -4rem auto 0 auto;
		overflow: hidden;
		padding: 0 2rem 0 0;
		position: relative;
		width: calc(100% - 4rem);
		max-width: 72rem;
		z-index: 2;
	}
	
	
	
		#nav links {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-grow: 1;
			-webkit-flex-grow: 1;
			-ms-flex-grow: 1;
			flex-grow: 1;
			-moz-flex-shrink: 1;
			-webkit-flex-shrink: 1;
			-ms-flex-shrink: 1;
			flex-shrink: 1;
			font-family: "Source Sans Pro", Helvetica, sans-serif;
			font-weight: 900;
			letter-spacing: 0.075em;
			list-style: none;
			margin-bottom: 0;
			padding-left: 0;
			text-transform: uppercase;
		}

		
		#nav icons {
			-moz-flex-grow: 0;
			-webkit-flex-grow: 0;
			-ms-flex-grow: 0;
			flex-grow: 0;
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			margin-bottom: 0;
		}

	
	
</style>
