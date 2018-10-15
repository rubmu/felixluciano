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

            v-responsive.px-2(:aspect-ratio='2/1')
              v-img(contain height='100%' :aspect-ratio='2/1' :src='post.iconSource' :lazy-src='post.iconSource')


        v-flex(xs3)
          v-layout(fill-height column justify-center align-center)

            .title.text-xs-center {{ post.title }}
            .caption {{ post.subtitle }}
</template>



<script lang='coffee'>

export default
  name: 'card--post'

  props: ['post']

</script>
