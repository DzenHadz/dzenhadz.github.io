<template>
  <div class="mt-10">
    <h1 class="paragraph--text">Services</h1>
   <v-container class="align-center justify-center">
       <v-row>
          <v-flex xs12 sm6 lg4 xl3 v-for="service in services"
            :key="service.title"> 
          <v-card
            class="ma-8"
            color="tiles text--text"  
            max-width="350">
            <v-card-title>
              <v-icon large left color="secondary">
                {{ service.icon }}
              </v-icon>
              <span class="title font-weight-light">{{ service.title }}</span>
            </v-card-title>
            <v-card-text class="text--text">
              {{ service.description }}
            </v-card-text>
          </v-card>
        </v-flex> 
       </v-row>
    </v-container> 
  </div>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        icon: "mdi-devices",
        title: "Functional Testing",
        description:
          "Ignores the internal parts and focuses only on the output to check if it is as per the requirement or not",
      },
      {
        icon: "mdi-test-tube",
        title: "Manual Testing",
        description:
          "Is the process of using functions and features of an application as an end-user would, to verify the software is working as required.",
      },
      {
        icon: "mdi-graph",
        title: "Integration Testing",
        description:
          "Testing of all integrated modules to verify the combined functionality after integration is termed so.",
      },
      {
        icon: "mdi-cellphone",
        title: "Mobile Testing",
        description:
          " Mobile devices have experienced phenomenal growth over the past few years and now it is critical to make sure your platform looks and functions correctly on a wide arrary of devices.",
      },
           {
        icon: "mdi-transit-connection-variant",
        title: "Preformance Testing",
        description:
          "Performance testing, a non-functional testing technique performed to determine the system parameters in terms of responsiveness and stability under various workload.",
      },
      {
        icon: "mdi-chat",
        title: "Consulting",
        description:
          "Consulting will provide you a complete testing plan for your current project that will help you ensure its quality and success.",
      }
    ]
  })
};
</script>
<style scoped>
</style>
