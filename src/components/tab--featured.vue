<template lang='pug'>

  v-container.tab-wrapper.py-5
    v-layout(row wrap)

      v-flex.mb-5(xs12)
        v-layout

          v-flex.hidden-xs-only(sm1 md1 lg1 xl1)
            v-layout(fill-height align-center)
              v-divider.grey

          v-flex.text-sm-center(xs12 sm5 md4 lg3 xl3)
            .display-1 {{ text }}

          v-flex.hidden-xs-only(sm6 md7 lg8 xl8)
            v-layout(fill-height align-center)
              v-divider.grey


      v-flex(xs12)
        v-layout(row wrap)

          template(v-for='card in 16')
            v-flex(xs12 sm6 md4 lg3)
              v-responsive.px-2.pt-1.pb-3(:aspect-ratio='3/4')
                v-card(height='100%')
                  v-layout(fill-height justify-center align-center)
                    v-btn(fab icon color='primary')
                      v-icon mdi-plus
</template>



<script lang='coffee'>

export default
  name: 'tab--featured'

  data: ->
    text: 'Featured posts'

</script>



<style lang='sass'>

  .card
    padding: 5%

</style>
