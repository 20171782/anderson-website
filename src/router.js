import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Gallery from './views/Gallery.vue'
import Events from './views/Events.vue'
import Contact from './views/Contact.vue'
import user from './views/userPage.vue'
import event from './views/viewEvents.vue'
import news from './views/newEvent.vue'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css'

// loads the Icon plugin
UIkit.use(Icons);
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/gallery',
      name: 'gallery',
      component:Gallery
    },
    {
      path: '/contact',
      name: 'contact',
      component:Contact
    },
    {
      path: '/events',
      name: 'events',
      component:Events
    },
    {
      path: '/user',
      name: 'userPage',
      component:user
    },
    {
      path: '/event',
      name: "viewEvents",
      component:event,
      props:true
    },
    {
      path: '/new',
      name: "newEvent",
      component:news,
      props:true
    },

  ]
})
