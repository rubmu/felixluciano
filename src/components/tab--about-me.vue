<template lang='pug'>

  v-container.tab-wrapper.py-5
    v-layout(justify-center)

      v-flex.mt-4(xs12 md8)
        v-layout(row wrap)

          v-flex(xs12)
            v-layout(justify-space-around align-center)

              v-flex.hidden-xs-only.py-4(sm4 md4 lg4 xl4)
                v-divider.grey

              v-flex(xs12 sm3 md3 lg2 xl2)
                v-layout(justify-center)

                  v-avatar.elevation-2(size='126')
                    v-img(src='public/profile-photo.jpg' lazy-src='public/profile-photo.jpg')

              v-flex.hidden-xs-only.py-4(sm4 md4 lg4 xl4)
                v-divider.grey


          v-flex(xs12)
            v-layout(column align-center v-once)
              .display-1.pt-3(v-once) {{ profile.name }}
              .body-1.pt-2(v-once) {{ profile.location() }}


          v-flex(xs12)
            v-layout(justify-center)
              .subheading.text-xs-center.mt-4.mb-5(v-once) {{ profile.about }}


          v-flex(xs12)
            v-layout(justify-center)

              v-flex(xs12 sm11 md10)
                v-layout(row wrap justify-space-between align-center)

                  v-flex.pl-3.pt-4.pb-2(xs12)
                    .body-1 Practices:


                  v-flex(xs12)
                    template(v-for='icon in icons' v-once)

                      v-tooltip(bottom)
                        v-btn.ma-0(flat large icon slot='activator' target='_blank' :color='icon.color' :href='icon.href')
                          img(height='24' :src='iconPath(icon.name)')
                        span {{ icon.text }}
</template>



<script lang='coffee'>

export default
  name: 'tab--about-me'

  data: ->
    profile:
      name: 'Luciano Felix'
      city: 'São Paulo'
      state: 'SP'
      county: 'Brazil'
      location: -> "#{@city} - #{@state}, #{@county}"
      about: 'Front-End web developer, design and photography lover.'

    icons: [
        name: 'html'
        text: 'HTML'
        color: 'deep-orange'
      ,
        name: 'css'
        text: 'CSS'
        color: 'blue'
      ,
        name: 'js'
        text: 'JavaScript'
        color: 'yellow'
      ,
        name: 'pugjs'
        text: 'Pug'
        color: 'brown'
        href: 'https://pugjs.org'
      ,
        name: 'sass'
        text: 'SASS'
        color: 'pink'
        href: 'https://sass-lang.com'
      ,
        name: 'coffeescript'
        text: 'Coffeescript'
        color: 'indigo'
        href: 'https://coffeescript.org'
      ,
        name: 'jquery'
        text: 'jQuery'
        color: 'blue'
        href: 'https://jquery.com'
      ,
        name: 'angularjs'
        text: 'AngularJS'
        color: 'red'
        href: 'https://angularjs.org'
      ,
        name: 'vue'
        text: 'VUE'
        color: 'teal'
        href: 'https://vuejs.org'
      ,
        name: 'vuetify'
        text: 'Vuetify'
        color: 'light-blue'
        href: 'https://vuetifyjs.com'
      ,
        name: 'npm'
        text: 'NPM'
        color: 'red'
        href: 'https://www.npmjs.com'
      ,
        name: 'nodejs'
        text: 'NodeJS'
        color: 'light-green'
        href: 'https://nodejs.org'
      ,
        name: 'git'
        text: 'Git'
        color: 'orange'
        href: 'https://git-scm.com'
      ,
        name: 'github'
        text: 'Github'
        color: 'black'
        href: 'https://github.com'
    ]


  methods:
    iconPath: (name) ->
      "public/icons/#{name}.svg"

</script>
