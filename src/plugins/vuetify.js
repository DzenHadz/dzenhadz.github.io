import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: ['mdi', 'faSvg']
    },
    theme: {
        themes: {
          light: {
            primary: "#FFFFFF", 
            secondary: "#70B5CF", 
            accent: colors.indigo.base, 
            paragraph: colors.shades.white,
            text: colors.shades.black
          },
          dark: { 
            primary: colors.teal.lighten1,
            secondary: colors.grey.lighten4,
            paragraph: colors.shades.white,
            tiles: '#001A38'
          }
        }
      }
});
