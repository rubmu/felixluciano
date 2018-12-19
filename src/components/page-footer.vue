<template lang='pug'>

  v-footer.pt-5(dark height='auto' color='grey lighten-5')
    v-container.v-footer--container.grey.darken-4

      v-layout(row wrap justify-center)
        v-flex(xs12 md11)

          v-layout.pt-3(row wrap align-center)

            v-flex
              .subheading Published under the
                a.mx-1.white--text(flat target='_blank' href='https://github.com/FelixLuciano/felixluciano.github.io/blob/master/LICENSE')
                  | MIT License
              .caption Copyright © 2018 Luciano Felix

            v-btn.ma-0(flat dark icon @click='scrollTop' :large='isMedium')
              v-icon(size='24px') mdi-chevron-up


          v-flex.pt-4.pb-2(xs12)
            v-layout(justify-center align-center)

              v-divider.mr-4
              img(src='public/typo.svg' height='20')
              v-divider.ml-4
  //--
</template>



<script lang='coffee'>

export default
  name: 'page-footer'

  computed:
    isMedium: ->
      @$vuetify.breakpoint.smAndUp


  methods:
    scrollTop: ->
      @$vuetify.goTo window.innerHeight,
        duration: 500

</script>




<style lang='sass' scoped>

  .v-footer--container
    border-radius: 5px 5px 0 0

</style>
