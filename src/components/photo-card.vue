<template lang='pug'>

  v-img(:aspect-ratio='16/9' :src='data.src' :lazy-src='data.src')
    v-hover(v-if='$vuetify.breakpoint.smAndUp')

      .simple-photo--cover(:class="{'transparent': !hover}" slot-scope='{hover}')
        v-layout.ma-0(fill-height v-if='data.title && data.description')

          transition(name='slide-x-transition')
            v-flex.pa-0(sm5 md7 lg5 v-show='hover')

              v-card(flat tile height='100%' color='grey lighten-5')

                v-flex.pt-4.pr-1(xs12)
                  .headline.font-weight-black.text-uppercase {{ data.title || 'UNTITLED' }}
                  .body-1.pt-1 {{ data.description || 'NO DESCRITION' }}

                v-card-actions.pl-2.pt-4.hidden-md-and-down
                  v-btn.font-weight-bold(flat outline) Check out
    //--
</template>



<script lang='coffee'>

export default
  name: 'simple-photo'


  data: ->
    hover: false


  props: ['data']

</script>



<style lang='sass' scoped>

  .simple-photo--cover
    width: 100%
    height: 100%
    background: rgba(#FFF, .2)
    transition: .3s

    &:hover
      cursor: pointer

</style>
