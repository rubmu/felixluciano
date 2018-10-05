<template lang='pug'>

  v-footer(dark height='auto' color='grey darken-4')
    v-container
      v-layout(row wrap)

        v-flex(xs12)
          v-layout(row wrap align-center)

            span.subheading Made with
              span.red--text.px-1 ❤
            v-spacer

            v-btn.mx-3(dark icon large @click="$vuetify.goTo('#toolbar-replacer', {duration: 1000})")
              v-icon(size='24px') mdi-chevron-up


        v-flex.py-4(xs12)
          v-layout(justify-center)

            img(src='public/typo.svg' height='20')
</template>



<script lang='coffee'>

import * as $ from 'jquery'

export default
  name: 'page-footer'

  data: ->
    fixed: false

</script>
