<template>
  <v-footer color="teal lighten-4" padless>
    <v-card class="flex" flat tile>
      <v-card-title class="primary justify-center">
        <v-btn
          fab
          v-for="link in links"
          :key="link.icon"
          class="mx-1 white--text"
          icon
          :href="link.to"
          target="_blank"
        >
          <v-icon size="30px" color="secondary">
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="justify-center primary text--text">
        &copy;{{ new Date().getFullYear() }} — <strong>  Dženita Hadžajlija</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [

      {
        icon: "mdi-linkedin",
        to: "https://www.linkedin.com/in/d%C5%BEenita-had%C5%BEajlija-2599561b3/",
      },
      { icon: "mdi-email", to: "mailto: hadzajlijadz@gmail.com" },
    ],
  }),
};
</script>