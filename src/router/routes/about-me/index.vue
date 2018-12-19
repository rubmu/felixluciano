<template lang='pug'>

  v-container
    v-layout(row wrap)

      v-flex(sx12)
        v-tabs(color='transparent' slider-color='transparent')
          v-layout(align-center)

            v-divider.mr-3

            v-btn.px-2.mx-1(flat @click='anchorTo("#anchor--about-me--biography")')
              v-icon.mr-2(small color='grey darken-2') mdi-text-subject
              | Biography

            v-btn.px-2.mx-1(flat @click='anchorTo("#anchor--about-me--practices")')
                v-icon.mr-2(small color='grey darken-2') mdi-flash
                | Pratices

            v-divider.ml-3



      v-flex.mt-4(xs12)

        v-flex.text-xs-center.mt-2(xs12)
          v-avatar(size='180')
            v-img(:src='avatarSrc' :lazy-src='avatarSrc')

          .display-1.mt-4.pb-4#anchor--about-me--biography Luciano Felix


        v-flex(xs12 d-flex justify-center)
          v-flex.biography-quote.text-xs-justify(xs12 sm9 md7)

            v-icon(color='primary') mdi-format-quote-open

            | Hi, my name is Luciano Felix Dias I'm {{ myAge }} and i live in
            a.ml-1.font-weight-bold(:href='socialLinks.maps' target='_blank') São Paulo, Brazil
            | .
            | Programming is one of my hobbies that I intend to take to a professional carreer, I understand that through it I have a medium of creation where I can express a little of what I think as in photography, currently practice only in the front-end and have a brief experience in hardware programming, so I have plans in long-term to expand my techniques and become professional.
            | And i love to photograph any kind of thing, especially small objects, and for each photo I try to explore some detail that makes it a photograph with something more than some simple record.
            br
            | On this page I will publish some of my creations, but if you prefer to follow me posting photos on
            a.ml-1.font-weight-bold(:href='socialLinks.instagram' target='_blank') Instagram
            | , creating pens on
            a.mx-1.font-weight-bold(:href='socialLinks.codepen' target='_blank') Codepen
            | or developing projects on
            a.ml-1.font-weight-bold(:href='socialLinks.github' target='_blank') Github
            |, and if you want to contact me send me an
            a.ml-1.font-weight-bold(:href='socialLinks.mail') email
            |.

            v-icon(color='primary') mdi-format-quote-close



      v-flex.pt-4(xs12)

        v-flex.mt-5.pb-4(xs12)
          v-layout(align-center)

            v-flex(xs1)
              v-divider.mr-4.hidden-xs-only
              v-divider.mr-2.hidden-sm-and-up

            span#anchor--about-me--practices.headline.font-weight-bold PRATICES

            v-divider.ml-4.hidden-xs-only
            v-divider.ml-3.hidden-sm-and-up


        v-flex(xs12)
          v-layout(row wrap)

            v-flex.text-xs-center.px-3.pb-4(xs6 sm3 md2 v-once v-for='pratice, index in pratices' :key='index')
              v-img.ma-4(:asect-ratio='1/1' :src="'public/icons/' + pratice.icon" :lazy-src="'public/icons/' + pratice.icon")
              .title.font-weight-bold {{ pratice.name }}
  //--
</template>



<script lang='coffee'>

  export default
    name: 'about-me'


    data: ->
      avatarSrc: 'https://res.cloudinary.com/tecice/UG9ydGlmb2xpbw/aXRzbWU.jpg'

      socialLinks:
        maps: 'https://goo.gl/maps/64px4ReynY52'
        codepen: 'https://codepen.io/FelixLuciano'
        github: 'https://github.com/felixLuciano'
        instagram: 'https://instagram.com/felix._.luciano'
        mail: 'mailto:luciano.felix.555@hotmail.com'

      pratices: [
          icon: 'pratices/html.svg'
          name: 'HTML'
        ,
          icon: 'pratices/css.svg'
          name: 'CSS'
        ,
          icon: 'pratices/js.svg'
          name: 'JAVASCRIPT'
        ,
          icon: 'pratices/pugjs.svg'
          name: 'PUG'
        ,
          icon: 'pratices/sass.svg'
          name: 'SASS'
        ,
          icon: 'pratices/coffeescript.svg'
          name: 'coffeescript'
        ,
          icon: 'pratices/jquery.svg'
          name: 'JQUERY'
        ,
          icon: 'pratices/angularjs.svg'
          name: 'ANGULARJS'
        ,
          icon: 'pratices/vue.svg'
          name: 'VUE'
        ,
          icon: 'pratices/vuetify.svg'
          name: 'VUETYFY'
        ,
          icon: 'pratices/webpack.svg'
          name: 'WEBPACK'
        ,
          icon: 'pratices/npm.svg'
          name: 'NPM'
        ,
          icon: 'pratices/nodejs.svg'
          name: 'NODE.JS'
        ,
          icon: 'pratices/git.svg'
          name: 'GIT'
        ,
          icon: 'pratices/github.svg'
          name: 'GITHUB'
        ,
          icon: 'pratices/photoshop.svg'
          name: 'PHOTOSHOP'
        ,
          icon: 'pratices/illustrator.svg'
          name: 'ILLUSTRATOR'
      ]


    computed:
      myAge: ->
        birthday = new Date '12-16-2000'
        ageDifMs = Date.now() - birthday.getTime()
        ageDate = new Date ageDifMs

        Math.abs ageDate.getFullYear() - 1970



    methods:
      anchorTo: (element) ->
        @$vuetify.goTo element,
          duration: 500
          offset: -58

</script>



<style lang='sass'>

  .biography-quote
    font-size: 1.2em
    line-height: 1.6

</style>
