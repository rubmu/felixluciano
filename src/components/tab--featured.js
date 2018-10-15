<template lang='pug'>

  v-container.tab-wrapper.py-5
    v-layout(row wrap)

      v-flex.mb-5(xs12)
        v-layout

          v-flex.hidden-xs-only(sm1 md1 lg1 xl1)
            v-layout(fill-height align-center)
              v-divider.grey

          v-flex.text-sm-center(xs12 sm5 md4 lg3 xl3)
            .display-1(v-once) {{title}}

          v-flex.hidden-xs-only(sm6 md7 lg8 xl8)
            v-layout(fill-height align-center)
              v-divider.grey


      v-flex(xs12)
        v-layout(row wrap)

          template(v-for='post in posts')
            card-post(v-if='post.type === "post"' :post='post')
            card-photo(v-if='post.type === "photo"' :post='post')
</template>;

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
        type: 'post'
        title: 'Stickman'
        subtitle: 'Game'
        headIcon: 'codepen'
        href: 'https://codepen.io/FelixLuciano/pen/xpWwGm'
        iconSource: 'https://res.cloudinary.com/tecice/image/upload/v1539569650/PROJECT:%20Github%20portifolio/Stickman.svg'
      ,
        type: 'photo'
        title: 'Glass bottle'
        subtitle: 'Photography'
        headIcon: 'instagram'
        href: 'https://www.instagram.com/p/BhRqgVSnkyZB_O2zaGRZofhCPSQ2Q9TY4PTlqk0'
        photoSource: 'https://res.cloudinary.com/tecice/image/upload/v1539570252/PROJECT:%20Github%20portifolio/glass-bottle-cover.jpg'
      ,
        type: 'post'
        title: 'Super Checkbox Challenge'
        subtitle: 'Game'
        headIcon: 'codepen'
        href: 'https://codepen.io/FelixLuciano/pen/zaWwVG'
        iconSource: 'https://res.cloudinary.com/tecice/image/upload/SuperCheckboxChallenge-logo.png'
      ,
        type: 'photo'
        title: 'Dreaming'
        subtitle: 'audio-visual'
        headIcon: 'instagram'
        badgeIcon: 'filmstrip'
        href: 'https://www.instagram.com/p/Bhuspe5HXokj-XxOB8AzJNo1M5IXlIBWWJU0KA0'
        photoSource: 'https://res.cloudinary.com/tecice/image/upload/v1539570252/PROJECT:%20Github%20portifolio/dreaming-cover.jpg'
      ,
        type: 'post'
        title: 'Block generator'
        subtitle: 'Game'
        headIcon: 'codepen'
        href: 'https://codepen.io/FelixLuciano/pen/vZKKBb'
        iconSource: 'https://res.cloudinary.com/tecice/image/upload/v1539570715/PROJECT:%20Github%20portifolio/block-generator-icon.png'
    ]

  components:
    'card-post': cardPost
    'card-photo': cardPhoto

</script>;

<style lang='sass'>

  .card
    padding: 5%

</style>;
