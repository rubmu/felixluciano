<template lang='pug'>

  v-layout(row wrap)
    v-flex.pa-2(xs4)
      photo(:aspect-ratio='16/9' :data='data.showcase.left.thumb' @click.native='click(data.showcase.left.photo)')

    v-flex.pa-2(xs4)
      photo(:aspect-ratio='16/9' :data='data.showcase.center.thumb' @click.native='click(data.showcase.center.photo)')

    v-flex.pa-2(xs4)
      photo(:aspect-ratio='16/9' :data='data.showcase.right.thumb' @click.native='click(data.showcase.right.photo)')


    v-flex(xs12)
      v-expansion-panel.mt-2.elevation-0
        v-expansion-panel-content.transparent(lazy :hide-actions='!data.photos' :readonly='!data.photos')

          v-flex(slot='header' d-flex)
            .title.font-weight-black.text-uppercase {{ data.title }}
            .body-1.font-weight-bold.text-xs-right.pr-3(v-if='data.photos') See more


          v-layout(row wrap)
            v-flex.pa-2(xs4 sm3 v-for='photo, index in data.photos' :key='index')
              photo(:aspect-ratio='16/9' :data='photo.thumb' @click.native='click(photo.photo)')

          v-divider.mt-3.pb-2.mx-5
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
