<template lang='pug'>

  v-layout(row wrap)
    v-flex(xs12)

      v-window(touchless v-model='window')
        v-window-item(lazy v-for='(page, index) in pages' :key='index')

          v-layout(row wrap)
            template(v-for='collection in page')

              v-flex.mb-5(xs12)
                collection(:data='collection' @click='openLightbox')


    v-flex.text-xs-center(xs12)
      v-pagination(color='primary' total-visible='7' v-model='pagination' :length='pages.length' @input='scrollTop')

    lightbox(:data='lightbox')
  //--
</template>



<script lang='coffee'>

import { get } from 'axios'

import collection from '@/components/photo-collection'
import lightbox from '@/components/photo-lightbox'

export default
  name: 'photography--collections'


  data: ->
    pagination: 1

    lightbox:
      showLightbox: false
      src: ''

    collections: [
        title: 'LOADING...'
        showcase:
          left:
            photo: {src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'}
            thumb: {src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'}
          center:
            photo: {src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'}
            thumb: {src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'}
          right:
            photo: {src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'}
            thumb: {src: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/TG9hZGluZw_dGh1bWI.jpg'}
    ]


  computed:
    window: ->
      @pagination - 1

    pages: ->
      Array Math.ceil @collections.length / 4
        .fill()
        .map (_, pageNumber) =>
          @collections.slice pageNumber * 4, (pageNumber + 1) * 4


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
    get '/public/posts/collections.json'
      .then ({data}) =>
        @collections = data


  components:
    'collection': collection
    'lightbox': lightbox

</script>



<style lang='sass'>

</style>
