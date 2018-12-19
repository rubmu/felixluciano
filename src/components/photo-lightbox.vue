<template lang='pug'>

  v-dialog(lazy fullscreen v-model='data.showLightbox' transition='slide-y-reverse-transition')
    v-layout.lightbox--background-cover.pa-1(column fill-height @click='closeLightbox')

      v-flex.py-2(xs12)
        .lightbox--photo-container(:style='{"--photo": "url(" + data.src + ")"}')

      v-flex.white--text.text-xs-center(xs1 d-flex align-center)
        .caption.font-weight-bold COYRIGHT © 2018 LUCIANO FELIX - ALL RIGHTS RESERVED
          .caption Click anywhere to close
  //--
</template>



<script lang='coffee'>

export default
  name: 'photo-lightbox'

  props: ['data']


  methods:
    preventDefault: (event_) ->
      event = event_ or window.event

      if event.preventDefault
         event.preventDefault()

      event.returnValue = false

    preventKeydown: (event) ->
      for key in [32..40]
        if event.keyCode == key
          return @preventDefault(event)


    disableScroll: ->
      if window.addEventListener
        window.addEventListener 'DOMMouseScroll', @preventDefault, false

      window.onmousewheel = document.onmousewheel = @preventDefault
      document.onkeydown = @keydown


    enableScroll: ->
      if window.removeEventListener
        window.removeEventListener 'DOMMouseScroll', @preventDefault, false

      window.onmousewheel = document.onmousewheel = document.onkeydown = null


    closeLightbox: ->
      @enableScroll()
      @data.showLightbox = false


  watch:
    data: (value) ->
      if value.showLightbox then @disableScroll()
      else enableScroll()

</script>



<style lang='sass' scoped>

  .lightbox--background-cover
    background: rgba(#000, .9)
    pointer-events: all

  .lightbox--photo-container
    width: 100%
    height: 100%
    background: center / contain no-repeat var(--photo)
    pointer-events: none

</style>
