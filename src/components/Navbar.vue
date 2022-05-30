/*no-mixed-spaces-and-tabs*/
<template>
  <div>
    <v-app-bar class="secondary" fixed dense elevate-on-scroll flat>
      <v-btn icon href="">
        <v-icon color="primary">mdi-heart</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon href="#about">
        <v-icon color="primary">account_circle</v-icon>
      </v-btn>
       <v-btn icon href="#services">
        <v-icon color="primary">mdi-dns</v-icon>
      </v-btn>
      <v-btn icon href="#project">
        <v-icon color="primary">work</v-icon>
      </v-btn>
      <v-btn icon href="#skills">
        <v-icon color="primary">mdi-laptop</v-icon>
      </v-btn>
      <!-- <v-btn icon v-on="on" @click="darkMode">
        <v-icon color="#ffbf00"> {{ $vuetify.theme.dark ? 'wb_sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
      </v-btn> -->
    </v-app-bar>
</div>
</template>

<script>
export default {
    mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'white';
      } else {
        this.bg = 'transparent';
      }
    },
  },
};
</script>

<style>
v-icon {
  color: #009688 !important;
}
</style>