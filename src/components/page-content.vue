<template lang='pug'>
  .tollbar
    v-toolbar#toolbar-replacer(flat v-show='fixed')
    v-toolbar#toolbar(flat :fixed='fixed' v-scroll="onScroll" color='grey darken-4')

      v-tabs(dark v-model='tabs' centered color='transparent' slider-color='primary')
        v-layout(wrap align-center)
          img.ml-4(src='public/logo.svg' height='28')
          img.ml-3(src='public/typo.svg' height='20')

          v-flex.ml-4
            v-tab(@click='openTab') Featured
            v-tab(@click='openTab') About me
            v-tab(@click='openTab') Contact

    v-tabs-items#tabs(v-model='tabs')
      v-tab-item
        .display-2(height='2000') Featured

      v-tab-item
        .display-2(height='2000') About me

      v-tab-item
        .display-2(height='2000') Contact
</template>



<script lang='coffee'>

import * as $ from 'jquery'

export default
  name: 'page-content'

  data: ->
    fixed: false

    tabs: 'tab-1'


  methods:
    onScroll: (e) ->
      @fixed = $(window).scrollTop() >= $('#mega-header').height()

    openTab: (e) ->
      @$vuetify.goTo '#toolbar-replacer',
        duration: 500

</script>



<style lang='sass'>

  .v-tabs__items
    height: 2000px

</style>
