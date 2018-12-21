<template lang='pug'>

  v-responsive(:aspect-ratio='16/9' slot-scope='{hover}')

    v-card(flat hover color='transparent' height='100%' :href='data.url' target='_blank')
      v-layout.ma-0(row wrap fill-height)

        v-flex.pa-0(xs12 sm5 order-xs2 order-sm1)
          v-card.pl-2.pr-1(flat color='transparent' width='100%' height='100%')

            v-flex.pt-4(xs12)
              .headline.font-weight-black.text-uppercase {{ data.title }}
              .body-1.mt-2 {{ data.description }}

            v-card-actions.py-3
              v-btn.font-weight-bold(outline) See more

        v-flex.pa-0(xs12 sm7 order-xs1 order-sm2)
          v-img(width='100%' height='100%' :src='data.src' :lazy-src='data.src')
    //--
</template>



<script lang='coffee'>

export default
  name: 'simple-photo'


  props: [ 'data']

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
