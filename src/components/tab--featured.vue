<template lang='pug'>

  v-container.tab-wrapper.py-5
    v-layout(row wrap)

      v-flex.mb-5(xs12)
        v-layout

          v-flex.hidden-xs-only(xs1)
            v-layout(fill-height align-center)
              v-divider.grey

          .display-1.px-3(v-once) Featured posts

          v-flex(d-flex align-center)
            v-divider.grey


      v-flex(xs12)
        v-layout(row wrap)

          template(v-for='post in posts')
            card-post(v-if="post.type === 'post'" :post='post')
            card-photo(v-if="post.type === 'photo'" :post='post')

      v-flex(xs12 v-show='!posts.length')
        v-layout(justify-center)
          v-progress-circular(indeterminate color='primary'  size='50')
</template>



<script lang='coffee'>

import Axios from 'axios'

import cardPost from './card--post.vue'
import cardPhoto from './card--photo.vue'

export default
  name: 'tab--featured'

  data: ->
    posts: []


  mounted: ->
    Axios.get('./dist/posts.json').then (response) =>
      @$set this, 'posts', response.data


  components:
    'card-post': cardPost
    'card-photo': cardPhoto

</script>



<style lang='sass'>

  .card
    padding: 5%

</style>
