<template lang='pug'>
  section

    v-toolbar#toolbar-replacer(flat v-show='fixed')
    v-toolbar#toolbar(flat :fixed='fixed' v-scroll="onScroll" color='grey darken-4')

      v-toolbar-side-icon
        img(src='public/logo.svg' height='28')

      v-toolbar-title.hidden-xs-only.ml-2
        v-layout(fill-height align-center)
          img(src='public/typo.svg' height='20')

      v-toolbar-items
        v-layout(align-center)
          v-divider.mx-3.hidden-xs-only(vertical inset dark)
          v-tabs(dark v-model='tabs' centered color='transparent' slider-color='primary')
            v-tab(@click='openTab') Featured
            v-tab(@click='openTab') About me
            v-tab(@click='openTab') Contact


    v-tabs-items#tabs(v-model='tabs')
      v-tab-item#tab--featured
        .display-2(height='2000') Featured

      v-tab-item#tab--about-me
        .display-2(height='2000') About me

      v-tab-item#tab--contact
        .display-2(height='2000') Contact
</template>;

<script lang='coffee'>

import * as $ from 'jquery'

export default
  name: 'page-content'

  data: ->
    fixed: false

    tabs: 'tab--featured'


  methods:
    onScroll: (e) ->
      @fixed = $(window).scrollTop() >= $('#mega-header').height()

    openTab: (e) ->
      @$vuetify.goTo '#toolbar-replacer',
        duration: 500

</script>;

<style lang='sass'>

  .v-tabs__items
    height: 2000px

</style>;
