<template>
 <layout name="LayoutDefault">
  <div class="intro">
    <h1>{{ msg }}</h1>
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="col-sm">
       <p>
      Introduction of the organization goes here,<br>
      See below
     
    </p>
    </div>
     </div>
</div>
   
    
</div>
 </layout>
</template>

<script>
import Layout from '../layouts/Layout';

export default {
  name: 'Introduction',
  props: {
    msg: String
  },
  components:{
    Layout,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
