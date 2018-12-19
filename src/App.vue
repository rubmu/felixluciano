<template lang='pug'>

  v-app
    page-header

    main-toolbar

    section#main-router-view
      transition(name='slide-y-reverse-transition' mode='out-in')
        router-view

    page-footer
  //--
</template>



<script lang='coffee'>

  import pageHeader from '@/components/page-header.vue'
  import mainToolbar from '@/components/main-toolbar.vue'
  import pageFooter from '@/components/page-footer.vue'

  export default
    name: 'luciano-felix'


    watch:
      $route: ->
        title = 'Luciano Felix'

        if @$route.path != '/'
          title += " - #{@$route.name}"

        document.title = title


    components:
      'page-header': pageHeader
      'main-toolbar': mainToolbar
      'page-footer': pageFooter

</script>



<style lang='sass'>

  html.overflow-y-hidden
    overflow-y: auto !important

  body
    cursor: default


  #main-router-view
    min-height: calc(100vmin - 48px)


  .theme--light.v-expansion-panel
    .v-expansion-panel__container
      .v-expansion-panel__header
        .v-expansion-panel__header__icon
          .v-icon
            color: #000 !important


  .theme--light.v-pagination
    .v-pagination__navigation, .v-pagination__item, .v-pagination__item--active
      box-shadow: none

    .v-pagination__item
      outline: none
      border-radius: 2px
      font-weight: 500

      &:not(.v-pagination__item--active)
        background-color: transparent !important

    .v-pagination__navigation
      background-color: transparent !important
      outline: none

      .v-icon
        color: #000 !important

</style>
