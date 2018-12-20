<template lang='pug'>

  v-layout(row wrap)
    v-flex(xs12)

      v-window(touchless v-model='window')
        v-window-item(lazy v-for='page, index in pages' :key='index')

          v-layout(row wrap)
            template(v-for='project in page')

              v-flex.pa-2(xs12 md6)
                project-card(:data='project')


    v-flex.pt-5.text-xs-center(xs12)
      v-pagination(color='primary' v-model='pagination' :length='pages.length' @input='scrollTop')
  //--
</template>



<script lang='coffee'>

import { get } from 'axios'

import projectCard from '@/components/project-card'

export default
  name: 'programming--projects'


  data: ->
    pagination: 1

    projects: [
        title: 'Loading...'
        description: ''
        src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        title: 'Loading...'
        description: ''
        src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        title: 'Loading...'
        description: ''
        src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        title: 'Loading...'
        description: ''
        src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
    ]


  computed:
    window: ->
      @pagination - 1

    pages: ->
      Array Math.ceil @projects.length / 6
        .fill()
        .map (_, pageNumber) =>
          @projects.slice pageNumber * 6, (pageNumber + 1) * 6


  methods:
    scrollTop: ->
      @$vuetify.goTo '#main-router-view',
        duration: 1000
        offset: -48


  mounted: ->
    get '/public/posts/projects.json'
      .then ({data}) =>
        @projects = data


  components:
    'project-card': projectCard

</script>



<style lang='sass'>

</style>
