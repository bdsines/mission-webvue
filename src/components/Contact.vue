<template>
  <layout name="LayoutDefault">
    <b-container id="contact">
    <p>We love hearing from you whether you would like to sponsor or volunteer! Please fill the form below one of us will get in touch with you!</p>
    <div class="row">
    <div class="col-sm">
      <section>
      <b-form  @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Reason:" label-for="input-3" default="Donate">
        <b-form-select
          id="input-3"
          v-model="form.contactReason"
          :options="contactReasons"
          required
        ></b-form-select>

      </b-form-group>
    <b-form-group id="input-group-4" label="Message:" label-for="input-4" >
        <b-form-textarea
          id="input-4"
          v-model="form.message"
          placeholder="Enter something..."
      rows="2"
      max-rows="6"
        ></b-form-textarea>

      </b-form-group>
     

      <b-button type="submit" variant="primary">Send</b-button>
    </b-form>
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
          <facebook url="url" scale="2" style="padding-right: 10px;padding-left: 15px;"></facebook>
                <email url="url" scale="2" style="padding-right: 10px;"></email>
                <whats-app url="url" scale="2"></whats-app>
                </div>
        </section>
      </section>
      </div>
      </div>
    </b-container>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";
import { Facebook,WhatsApp,Email } from 'vue-socialmedia-share';


export default {
  name: "Contact",
  data() {
      return {
        form: {
          email: '',
          name: '',
          contactReason: 'Donate',
          message: null,
          checked: []
        },
        contactReasons: [{ text: 'Select One', value: null }, 'Donate', 'Volunteet', 'Other'],
        show: true
      }
    },
 
  props: {
    msg: String,
  },
  components: {
    Layout,
    Facebook,WhatsApp,Email 
  },
  methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
