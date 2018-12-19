<template lang='pug'>

  v-container
    v-layout(row wrap)

      v-flex(sx12)
        v-tabs(color='transparent' slider-color='primary')

            v-flex.pr-3(d-flex align-center)
              v-divider

            v-tab.mx-1(@click='scrollTop' to='/programming/pens')
              v-icon.mr-2(small color='grey darken-2') mdi-pen
              | Pens

            v-tab.mx-1(@click='scrollTop' to='/programming/projects')
              v-icon.mr-2(small color='grey darken-2') mdi-folder-open
              | Projects

            v-flex.pl-3(d-flex align-center)
              v-divider
                

      v-flex.pt-5(xs12)
        transition(name='slide-y-reverse-transition' mode="out-in")
          router-view
  //--
</template>



<script lang='coffee'>

  export default
    name: 'home'


    methods:
      scrollTop: ->
        @$vuetify.goTo window.innerHeight,
          duration: 500

</script>



<style lang='sass'>

</style>
