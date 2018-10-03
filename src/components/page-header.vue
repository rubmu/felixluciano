<template lang='pug'>

#mega-header.grey.darken-4
  v-layout(column justify-space-between align-center fill-height)

    #buttons.mt-3: v-layout(justify-center align-center)
      v-icon.mx-3(color='grey') mdi-minus

      template(v-for='button in buttons')
        v-btn.button.mx-3(icon outline color='accent' v-bind="{[`${button.size}`]: true}")
          v-icon(:small="button.size === 'small'" color='grey lighten-3') mdi-{{ button.icon }}

      v-icon.mx-3(color='grey') mdi-minus

    img(src='public/logotypo.svg' height='300')

    v-btn#btn(icon large @click='scrollDown').mb-3
      v-icon(large color='white') mdi-chevron-down
</template>



<script lang='coffee'>

export default
  name: 'page-header'

  data: ->
    buttons: [
        size: 'small'
        icon: 'account-circle'
      ,
        size: 'medium'
        icon: 'instagram'
      ,
        size: 'large'
        icon: 'github-circle'
      ,
        size: 'medium'
        icon: 'codepen'
      ,
        size: 'small'
        icon: 'at'
    ]

  methods:
    scrollDown: ->
      @$vuetify.goTo '#toolbar',
        duration: 1000

</script>



<style lang='sass'>

#mega-header
  width: 100%
  height: 100vh
  background: url('~public/header-cover.jpg') no-repeat center / cover

  .button
    filter: grayscale(1)

    &:hover
      filter: grayscale(0)

</style>
