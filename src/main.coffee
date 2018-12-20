import Vue from 'vue'
import App from './App.vue'


import Vuetify, {
  VApp,  VToolbar, VToolbarItems, VAvatar, VDialog, VDivider, VExpansionPanel, VExpansionPanelContent,
  VHover, VCard, VCardTitle, VCardActions, VImg, VIcon, VContainer, VFlex, VLayout, VSpacer, VBtn, VFooter,
  VPagination, VProgressCircular, VResponsive, VTab,   VTabs, VTabsItems, VTabsSlider, VWindow, VWindowItem
} from 'vuetify/lib'

import 'vuetify/dist/vuetify.min.css'


import router from './router/index.coffee'


Vue.use Vuetify,
  theme:
    primary: '#673AB7'
    accent: '#AA00FF'

  icons:
    next: 'mdi-chevron-right'
    prev: 'mdi-chevron-left'
    expand: 'mdi-chevron-down'

  components: {
    VApp,  VToolbar, VToolbarItems, VAvatar, VDialog, VDivider, VExpansionPanel, VExpansionPanelContent,
    VHover, VCard, VCardTitle, VCardActions, VImg, VIcon, VContainer, VFlex, VLayout, VSpacer, VBtn, VFooter,
    VPagination, VProgressCircular, VResponsive, VTab,   VTabs, VTabsItems, VTabsSlider, VWindow, VWindowItem
  }


new Vue
  el: '#app'
  render: (h) => h App
  router: router
