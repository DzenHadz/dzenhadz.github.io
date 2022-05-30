<template>
  <div>
    <h1 class="paragraph--text mt-10">Skills & Tools</h1>
    <v-container class="paragraph--text mt-10">
     
        <v-row justify-content="center" class="ma-2">
          <v-card
          class="mx-auto rounded-lg tiles ma-2"
          max-width="150"
          max-height="50"
          hover
          v-for="tool in tools" :key="tool.name">
          <v-card-text class="text--text">
            <p>{{tool.name}}</p>
          </v-card-text>
        </v-card>
        </v-row>
         <hr class="mt-10" style="border-top: 3px solid;">
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tools: [
        { name: "Jira" },
        { name: "Confluence" },
        { name: "Gitlab" },
        { name: "Asana" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "TestRail" },
        { name: "Qase.io" },
        { name: "JMeter"},
        { name: "VS Code" },
        { name: "Jenkins"}, 
        { name: "Browserstack"}, 
        { name: "Git"}, 
      ]
    };
  },
};
</script>