<template lang='pug'>

  v-container
    v-layout(row wrap)

      v-flex(sx12)
        v-tabs(color='transparent' slider-color='primary')

            v-flex.pr-3(d-flex align-center)
              v-divider

            v-tab.mx-1(@click='scrollTop' to='/photography/collections')
              v-icon.mr-2(small color='grey darken-2') mdi-view-carousel
              | Collections

            v-tab.mx-1(@click='scrollTop' to='/photography/shots')
              v-icon.mr-2(small color='grey darken-2') mdi-camera
              | Shots

            v-flex.pl-3(d-flex align-center)
              v-divider


      v-flex.pt-5(xs12)
        transition(name='slide-y-reverse-transition' mode="out-in")
          router-view
  //--
</template>



<script lang='coffee'>

  export default
    name: 'photography'


    methods:
      scrollTop: ->
        @$vuetify.goTo '#main-router-view',
          duration: 1000
          offset: -48

</script>



<style lang='sass'>

</style>
