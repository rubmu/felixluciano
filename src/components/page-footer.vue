<template lang='pug'>

  v-footer(height='auto')
    v-card.flex(flat dark tile color='grey darken-4')

      v-card-title.pt-4
        span.subheading Made with
          span.red--text.px-1 ❤
        v-spacer

        v-btn.mx-3(dark icon large @click="$vuetify.goTo('#toolbar-replacer', {duration: 1000})")
          v-icon(size='24px') mdi-chevron-up

      v-card-actions.pb-5.justify-center
        img(src='public/typo.svg' height='20')
</template>



<script lang='coffee'>

import * as $ from 'jquery'

export default
  name: 'page-footer'

  data: ->
    fixed: false

</script>
