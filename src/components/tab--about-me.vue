<template lang='pug'>

  v-container.tab-wrapper.py-5
    v-layout(justify-center)

      v-flex.mt-4(xs8)
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
              .display-1.pt-3 {{ profile.name }}
              .body-1.pt-2 {{ profile.location() }}


          v-flex(xs12)
            v-layout(justify-center)
              .subheading.text-xs-center.mt-4.mb-5 Front-End web developer, design and photography lover.


          v-flex(xs12)
            v-layout(justify-center)

              v-flex(xs10)
                v-layout(row wrap justify-space-between align-center)

                  v-flex.pl-3.pt-4.pb-2(xs12)
                    .body-1 Practices:


                  v-flex(xs12)
                    template(v-for='icon in icons')

                      v-tooltip(bottom)
                        v-btn.ma-0(flat large icon :color='icon.color' slot='activator')
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
      ,
        name: 'sass'
        text: 'SASS'
        color: 'pink'
      ,
        name: 'coffeescript'
        text: 'Coffeescript'
        color: 'indigo'
      ,
        name: 'jquery'
        text: 'jQuery'
        color: 'blue'
      ,
        name: 'angularjs'
        text: 'AngularJS'
        color: 'red'
      ,
        name: 'vue'
        text: 'VUE'
        color: 'teal'
      ,
        name: 'vuetify'
        text: 'Vuetify'
        color: 'light-blue'
      ,
        name: 'npm'
        text: 'NPM'
        color: 'red'
      ,
        name: 'nodejs'
        text: 'NodeJS'
        color: 'light-green'
      ,
        name: 'git'
        text: 'Git'
        color: 'orange'
      ,
        name: 'github'
        text: 'Github'
        color: 'black'
    ]


  methods:
    iconPath: (name) ->
      "public/icons/#{name}.svg"

</script>
