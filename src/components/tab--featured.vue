<template lang='pug'>

  v-container.tab-wrapper.py-5
    v-layout(row wrap)

      v-flex.mb-5(xs12)
        v-layout

          v-flex.hidden-xs-only(sm1 md1 lg1 xl1)
            v-layout(fill-height align-center)
              v-divider.grey

          v-flex.text-sm-center(xs12 sm5 md4 lg3 xl3)
            .display-1(v-once) {{ title }}

          v-flex.hidden-xs-only(sm6 md7 lg8 xl8)
            v-layout(fill-height align-center)
              v-divider.grey


      v-flex(xs12)
        v-layout(row wrap)

          template(v-for='post in posts')
            card-post(v-if='post.type === "post"' :post='post')
            card-photo(v-if='post.type === "photo"' :post='post')
</template>



<script lang='coffee'>

import cardPost from './card--post.vue'
import cardPhoto from './card--photo.vue'

export default
  name: 'tab--featured'

  data: ->
    title: 'Featured posts'

    posts: [
        type: 'post'
        title: 'Electron-builder'
        subtitle: 'Web app'
        headIcon: 'github-circle'
        href: 'https://github.com/FelixLuciano/electron-builder'
        iconSource: 'https://github.com/FelixLuciano/electron-builder/raw/master/public/icon.svg?sanitize=true'
      ,
        type: 'photo'
        title: 'Glass bottle'
        subtitle: 'Photography'
        headIcon: 'instagram'
        href: 'https://www.instagram.com/p/BhRqgVSnkyZB_O2zaGRZofhCPSQ2Q9TY4PTlqk0'
        photoSource: 'https://instagram.fgru5-1.fna.fbcdn.net/vp/1194c19bf475256f7d6999478a60e388/5C4E87F2/t51.2885-15/sh0.08/e35/s640x640/29738018_799023720302876_3778787771200569344_n.jpg'
      ,
        type: 'photo'
        title: 'Dreaming'
        subtitle: 'audio-visual'
        headIcon: 'instagram'
        badgeIcon: 'video'
        href: 'https://www.instagram.com/p/Bhuspe5HXokj-XxOB8AzJNo1M5IXlIBWWJU0KA0'
        photoSource: 'https://instagram.fgru5-1.fna.fbcdn.net/vp/b895dab7e7c887f2ac3332367a58b241/5BBB9934/t51.2885-15/e35/30080010_162574391099598_2280605523684360192_n.jpg'
    ]

  components:
    'card-post': cardPost
    'card-photo': cardPhoto

</script>



<style lang='sass'>

  .card
    padding: 5%

</style>
