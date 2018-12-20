<template lang='pug'>

  header.grey.darken-4(:style='{height: windowHeight + "px"}')
    v-img(:src='coverSrc' :lazy-src='coverSrc' width='100%' height='100%')

      v-container(fill-height)
        v-layout(column justify-center)

          v-spacer

          v-flex(xs10 d-flex align-center)
            img(src='public/logotypo.svg' height='300')

          v-flex.text-xs-center(xs1)
            v-btn#btn(dark icon large @click='scrollDown')
              v-icon(large color='white') mdi-chevron-down


      v-layout(slot='placeholder' fill-height align-end justify-end)
        v-progress-circular.ma-4(indeterminate size='50' color='grey lighten-5')
  //--
</template>



<script lang='coffee'>

export default
  name: 'page-header'


  data: ->
    windowHeight: window.innerHeight

    coverSrc: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/aGVhZGVyQ292ZXI.jpg'


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
