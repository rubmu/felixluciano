<template lang='pug'>
  section

    v-toolbar#toolbar-replacer(flat v-show='fixed')
    v-toolbar#toolbar(flat dark color='grey darken-4' v-scroll="onScroll" :fixed='fixed')

      v-toolbar-side-icon(@click='scrollTop')
        img(height='28' src='public/logo.svg')


      v-toolbar-title.hidden-xs-only.ml-2
        v-layout(fill-height align-center)
          img(height='20' src='public/typo.svg')


      v-divider.mx-3.hidden-xs-only(vertical inset)


      v-toolbar-items
        v-layout(align-center)

          v-tabs(color='transparent' slider-color='primary' v-model='tabs' )
            v-tab(@click='openTab') Featured
            v-tab(@click='openTab') About me


    v-tabs-items#tabs(v-model='tabs')
      v-tab-item#tab--featured
        tab--featured

      v-tab-item#tab--about-me
        tab--about-me
</template>



<script lang='coffee'>

import $ from 'jquery'

import tabFeatured from './tab--featured.vue'
import tabAboutMe from './tab--about-me.vue'

export default
  name: 'page-content'

  data: ->
    fixed: false

    tabs: 'tab--featured'


  methods:
    onScroll: (e) ->
      @fixed = $(window).scrollTop() >= $('#mega-header').height()

    scrollTop: ->
      @$vuetify.goTo 0,
        duration: 1000

    openTab: (e) ->
      @$vuetify.goTo '#toolbar-replacer',
        duration: 500

  components:
    'tab--featured': tabFeatured
    'tab--about-me': tabAboutMe

</script>



<style lang='sass'>

.tab-wrapper
  min-height: calc(100vh - 64px)

</style>
