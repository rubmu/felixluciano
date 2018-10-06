<template lang='pug'>

v-flex(xs12 sm6 md4 lg3)
  v-responsive.px-2.pt-1.pb-3(:aspect-ratio='3/4')

    v-card(hover height='100%' color='grey lighten-4' :href='post.href' target='_blank')
      v-layout(fill-height column)


        v-flex.text-xs-center(xs2)
          v-layout(fill-height justify-center align-center)

            v-icon(large color='blue-grey darken-2') mdi-{{ post.headIcon }}

        v-flex(xs7)
          v-layout(fill-height justify-center align-center)
            v-flex(xs8)
              v-avatar.elevation-1(size='100%')
                v-img(:aspect-ratio='1/1' :src='post.photoSource' :lazy-src='post.photoSource')
                v-btn.mb-4.elevation-10(absolute large right bottom icon color='blue-grey lighten-4' :ripple='false' v-if='post.badgeIcon')
                  v-icon(color='grey darken-4') mdi-{{ post.badgeIcon }}


        v-flex(xs3)
          v-layout(fill-height column justify-center align-center)

            .title.text-xs-center {{ post.title }}
            .caption {{ post.subtitle }}
</template>



<script lang='coffee'>

export default
  name: 'card--photo'

  props: ['post']

</script>
