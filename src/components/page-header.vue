<template lang='pug'>

#mega-header.grey.darken-4: v-container.py-0(fill-height)
  v-layout(row wrap justify-center align-space-between)

    v-flex(xs12)
      v-layout(justify-center)

        v-flex(xs11 sm6 md5 lg4 xl3)
          v-layout(justify-space-between align-center)

            v-icon.hidden-xs-only.mt-3(color='grey') mdi-minus

            template(v-for='button in buttons')
              v-btn.button.mx-0.mt-3(icon outline color='accent' v-bind="{[`${button.size}`]: true}")
                v-icon(:small="button.size === 'small'" color='grey lighten-3') mdi-{{ button.icon }}

            v-icon.hidden-xs-only.mt-3(color='grey') mdi-minus


    v-flex(xs12)
      v-layout(fill-height justify-center align-center)

        img(src='public/logotypo.svg' height='300')


    v-flex(xs12)
      v-layout(fill-height justify-center align-end)

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
