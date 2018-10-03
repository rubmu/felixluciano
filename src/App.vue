<template lang='pug'>

  v-app
    pageHeader

    pageContent

    pageFooter
</template>



<script lang='coffee'>

import pageHeader from './components/page-header.vue'
import pageFooter from './components/page-footer.vue'
import pageContent from './components/page-content.vue'

export default
  name: 'profile-page'

  mounted: ->
    @$vuetify.theme.primary = '#673AB7'
    @$vuetify.theme.accent = '#AA00FF'

  components: {
    pageHeader, pageContent, pageFooter
  }

</script>



<style lang='sass'>

html
  overflow: auto

  .theme--light.application
    background: #ECEFF1

</style>
