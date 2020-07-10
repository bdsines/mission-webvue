import Vue from 'vue';
import Router from 'vue-router';

const Introduction = () => import(`./components/Introduction.vue`);
const Team = () => import(`./components/Team.vue`);
const Contact = () => import(`./components/Contact.vue`);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: `/`,
      name: `intro`,
      component: Introduction,
    },
    {
      path: `/team`,
      name: `team`,
      component: Team,
    },
    {
        path: `/contact`,
        name: `contact`,
        component: Contact,
      },
  ],
  mode: `history`,
});