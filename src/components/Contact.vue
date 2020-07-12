<template>
  <layout name="LayoutDefault">
    <div id="footer">
    <div class="row">
    <div class="col-sm">
      <section>
        <form method="post" action="#">
          <div class="fields">
            <div class="field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="Send Message" /></li>
          </ul>
        </form>
      </section>
      </div>
    <div class="col-sm">
      <section class="split contact">
        <section class="alt">
          <h3>Address</h3>
          <p>
            1234 Somewhere Road #87257<br />
            Nashville, TN 00000-0000
          </p>
        </section>
        <section>
          <h3>Phone</h3>
          <p><a href="#">(000) 000-0000</a></p>
        </section>
        <section>
          <h3>Email</h3>
          <p><a href="#">info@untitled.tld</a></p>
        </section>
        <section>
          <h3>Social</h3>
          <div class="row">
          <div class="col-sm">
          <facebook url="url" scale="2"></facebook>
          </div>
          <div class="col-sm">
                <email url="url" scale="2"></email>
                </div>
                <div class="col-sm">
                <whats-app url="url" scale="2"></whats-app>
                </div>
                </div>
        </section>
      </section>
      </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";
import { Facebook,WhatsApp,Email } from 'vue-socialmedia-share';


export default {
  name: "Contact",
  props: {
    msg: String,
  },
  components: {
    Layout,
    Facebook,WhatsApp,Email 
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
split.contact > section {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  padding: 3.15rem 4rem;
}

</style>
