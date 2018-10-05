<template lang='pug'>

  v-container.tab-wrapper.py-5
    v-layout(row wrap)

      v-flex(xs12)

        v-flex(xs1)
          v-layout(fill-height align-center)
            v-divider.grey

        v-flex.text-xs-center(xs3)
          .display-1 {{text}}

        v-flex(xs8)
          v-layout(fill-height align-center)
            v-divider.grey


      v-flex(xs12)
        v-card(width='100%' height='200px') Oi
</template>;

<script lang='coffee'>

export default
  name: 'tab--featured'

  data: ->
    text: 'Featured posts'

</script>;
