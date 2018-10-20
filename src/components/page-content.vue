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
        v-flex(d-flex align-center)

          v-tabs(color='transparent' slider-color='primary' v-model='toolbarTabs')
            v-tab(@click="openTab('featured')") Featured
            v-tab(@click="openTab('about-me')") About me



    v-window(v-model='tabs' touchless)
      v-window-item(value='tab--featured')
        tab--featured

      v-window-item(value='tab--about-me')
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

    toolbarTabs: 0
    tabs: 'tab--featured'


  methods:
    onScroll: (e) ->
      @fixed = $(window).scrollTop() >= $('#mega-header').height()

    scrollTop: ->
      @$vuetify.goTo 0,
        duration: 1000

    openTab: (tabName) ->
      @$vuetify.goTo '#toolbar-replacer',
        duration: 500

      @tabs = "tab--#{tabName}"

  components:
    'tab--featured': tabFeatured
    'tab--about-me': tabAboutMe

</script>



<style lang='sass'>

.tab-wrapper
  min-height: calc(100vh - 64px)

</style>
