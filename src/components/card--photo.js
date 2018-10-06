<template lang='pug'>

v-flex(xs12 sm6 md8 lg6).px-2.pt-1.pb-3

    v-card.card--photo_card(hover height='100%' :href='post.href' target='_blank')
      v-layout(fill-height column justify-center align-center)
</template>;

<script lang='coffee'>

export default
  name: 'card--photo'

  props: ['post']

</script>;
