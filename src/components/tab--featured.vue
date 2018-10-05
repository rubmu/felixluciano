<template lang='pug'>

  v-container.tab-wrapper
    .display-2.a {{ text }}
</template>



<script lang='coffee'>

export default
  name: 'tab--featured'

  data: ->
    text: 'Featured posts'

</script>
