<template lang='pug'>

  v-layout(row wrap)
    v-flex(xs12)

      v-window(touchless v-model='window')
        v-window-item(lazy v-for='page, index in pages' :key='index')

          v-layout(row wrap)
            template(v-for='shot in page')

              v-flex.pa-2(xs12 sm6)
                photo(:data='shot.thumb' @click.native='openLightbox(shot.photo)')


    v-flex.pt-3.text-xs-center(xs12)
      v-pagination(color='primary' v-model='pagination' :length='pages.length' @input='scrollTop')

    lightbox(:data='lightbox')
  //--
</template>



<script lang='coffee'>

import { get } from 'axios'

import photo from '@/components/photo-card'
import lightbox from '@/components/photo-lightbox'

export default
  name: 'photography--shots'


  data: ->
    pagination: 1

    lightbox:
      showLightbox: false
      src: ''

    shots: [
        photo:
          src: 'https://res.cloudinary.com/tecice//UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
        thumb:
          src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        photo:
          src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
        thumb:
          src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        photo:
          src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
        thumb:
          src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
      ,
        photo:
          src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
        thumb:
          src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'
    ]


  computed:
    window: ->
      @pagination - 1

    pages: ->
      Array Math.ceil @shots.length / 8
        .fill()
        .map (_, pageNumber) =>
          @shots.slice pageNumber * 8, (pageNumber + 1) * 8


  methods:
    scrollTop: ->
      @$vuetify.goTo '#main-router-view',
        duration: 1000
        offset: -48

    openLightbox: (photo) ->
      @lightbox =
        showLightbox: true
        src: photo.src


  mounted: ->
    get '/public/posts/shots.json'
      .then ({data}) =>
        @shots = data


  components:
    'photo': photo
    'lightbox': lightbox

</script>



<style lang='sass'>

</style>
