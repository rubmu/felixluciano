<template lang='pug'>

  nav#main-toolbar
    v-toolbar(flat dark dense color='grey darken-4')

      v-btn.ma-0.pl-2.pr-3.hidden-xs-only.mx-2(flat @click='scrollToZero')
        img(height='28' src='public/logo.svg')

        v-layout.ml-2(fill-height align-center)
          img(height='20' src='public/typo.svg')


      v-btn.ma-0.pa-0.mx-2.hidden-sm-and-up(flat icon @click='scrollToZero')
        img.mx-2(height='28' src='public/logo.svg')


      v-divider.ml-2.mr-3.hidden-xs-only(vertical inset)


      v-toolbar-items
        v-flex(d-flex align-center)

          v-tabs(color='transparent' slider-color='primary')
              v-tab(@click='scrollTop' to='/') About me
              v-tab(@click='scrollTop' to='/photography') Photography
              v-tab(@click='scrollTop' to='/programming') Programming
  //--
</template>



<script lang='coffee'>

export default
  name: 'main-toolbar'


  methods:
    scrollToZero: ->
      @$vuetify.goTo 0,
        duration: 1000

    scrollTop: ->
      @$vuetify.goTo '#main-router-view',
        duration: 1000
        offset: -48

</script>



<style lang='sass'>

  #main-toolbar
    position: -webkit-sticky
    position: sticky
    top: 0
    z-index: 200

    .v-toolbar
      overflow: hidden

      .v-tabs__slider
        height: 3px
        border-radius: 3px 3px 0 0

</style>
