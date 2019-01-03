import Vue from 'vue'
import Router from 'vue-router'


Vue.use Router

getRoute = (path) => require("@/router/routes/#{path}.vue").default


export default new Router

  mode: 'history'

  routes: [
      path: '/'
      name: 'Home'
      component: getRoute 'about-me/index'
    ,

      path: '/photography'
      component: getRoute 'photography/index'
      children: [
          path: '/photography'
          name: 'Photography'
          component: getRoute 'photography/collections'
        ,
          path: '/photography/collections'
          name: 'Photography collections'
          component: getRoute 'photography/collections'
        ,
          path: '/photography/shots'
          name: 'Photography shots'
          component: getRoute 'photography/shots'
      ]
    ,

      path: '/programming'
      component: getRoute 'programming/index'
      children: [
          path: '/programming'
          name: 'Programming'
          component: getRoute 'programming/pens'
        ,
          path: '/programming/pens'
          name: 'Programming pens'
          component: getRoute 'programming/pens'
        ,
          path: '/programming/projects'
          name: 'Programming projects'
          component: getRoute 'programming/projects'
      ]


    ,
      path: '*'
      redirect: '/'
  ]
