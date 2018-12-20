<template lang='pug'>

  v-layout(row wrap)
    v-flex(xs12)

      v-window(touchless v-model='window')
        v-window-item(lazy v-for='page, index in pages' :key='index')

          v-layout(row wrap)
            template(v-for='pen in page')

              v-flex.pa-2(xs12 md6)
                photo(:data='pen' @click.native='openLink(pen.url)')


    v-flex.pt-5.text-xs-center(xs12)
      v-pagination(color='primary' v-model='pagination' :length='pages.length' @input='scrollTop')
  //--
</template>



<script lang='coffee'>

import { get } from 'axios'

import photo from '@/components/photo-card'

export default
  name: 'programming--pens'


  data: ->
    pagination: 1

    pens: [
        title: ''
        description: ''
        url: ''
        src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        title: ''
        description: ''
        url: ''
        src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        title: ''
        description: ''
        url: ''
        src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        title: ''
        description: ''
        url: ''
        src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
    ]


  computed:
    window: ->
      @pagination - 1

    pages: ->
      Array Math.ceil @pens.length / 8
        .fill()
        .map (_, pageNumber) =>
          @pens.slice pageNumber * 8, (pageNumber + 1) * 8


  methods:
    openLink: (url) ->
      window.open url

    scrollTop: ->
      @$vuetify.goTo '#main-router-view',
        duration: 1000
        offset: -48


  mounted: ->
    get '/public/posts/pens.json'
      .then ({data}) =>
        @pens = data


  components:
    'photo': photo

</script>



<style lang='sass'>

</style>
