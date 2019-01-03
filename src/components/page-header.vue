<template lang='pug'>

  header.grey.darken-4(:style='{height: windowHeight + "px"}')

    v-container(fill-height)
      v-layout(column justify-center)

        v-spacer

        v-flex(xs10 d-flex align-center)
          img(src='public/brand/full-logo.svg' height='200')

        v-flex.text-xs-center(xs1)
          v-btn#btn(dark icon large @click='scrollDown')
            v-icon(large color='white') mdi-chevron-down
  //--
</template>



<script lang='coffee'>

export default
  name: 'page-header'


  data: ->
    windowHeight: window.innerHeight


  methods:
    scrollDown: ->
      @$vuetify.goTo '#main-router-view',
        duration: 1000
        offset: -48


  mounted: ->
    addEventListener 'resize', ->
      @windowHeight = window.innerHeight

</script>



<style lang='sass'>


</style>
