<template lang='pug'>

  v-layout(row wrap)

    v-flex(xs12)

      v-container.pa-0(fluid v-bind='{ [`grid-list-${$vuetify.breakpoint.name}`]: true }')
        v-layout(row wrap)

          v-flex(xs4)
            photo(:aspect-ratio='16/9' :data='data.showcase.left.thumb' @click.native='click(data.showcase.left.photo)')

          v-flex(xs4)
            photo(:aspect-ratio='16/9' :data='data.showcase.center.thumb' @click.native='click(data.showcase.center.photo)')

          v-flex(xs4)
            photo(:aspect-ratio='16/9' :data='data.showcase.right.thumb' @click.native='click(data.showcase.right.photo)')


    v-flex(xs12)
      v-expansion-panel.mt-2.elevation-0
        v-expansion-panel-content.transparent(lazy :hide-actions='!data.photos' :readonly='!data.photos')

          v-flex(slot='header'): v-layout
            .title.font-weight-black.text-uppercas {{ data.title }}
            v-spacer
            .body-1.font-weight-bold.hidden-xs-only.pr-3(v-if='data.photos') See more

          v-container.pa-2(fluid v-bind='{ [`grid-list-${$vuetify.breakpoint.name}`]: true }')
            v-layout(row wrap)

              v-flex(xs4 sm3 v-for='photo, index in data.photos' :key='index')
                photo(:aspect-ratio='16/9' :data='photo.thumb' @click.native='click(photo.photo)')

          v-divider.mt-2.pb-2.mx-5
  //--
</template>



<script lang='coffee'>

import photo from '@/components/photo-card'

export default
  name: 'photo-collection'

  props: ['data']


  methods:
    click: (photo) ->
      @$emit 'click', photo


  components:
    'photo': photo

</script>



<style lang='sass'>

</style>
