<template>
  <v-container class="align-center justify-center mt-8">
      <h1 class="paragraph--text">Projects</h1>
      <div id="project">
        <v-layout row wrap class="mt-8 align-center align-center" >      
        <v-flex id="icon" class="align-center justify-center" xs12 sm6 lg4 xl4 v-for="project in projects" :key="project.name">
            <v-hover>
                <v-card class="ma-3 tiles justify-center paragraph--text rounded-xl" max-width="500" color="#CCCCC">
                    <v-img height="250" :src="require(`@/assets/${project.img}`)">
                    </v-img>
                    <v-layout>
                        <v-card-title class="text-center font-weight-bold text--text ">{{project.name}}</v-card-title>
                        <v-spacer></v-spacer>
                        <div class="icon-group">
                            <v-icon class="ma-1 secondary--text" v-for="i in project.platforms" :key="i.plat">{{i.icon}}</v-icon>
                        </div>
                    </v-layout> 
                </v-card>   
            </v-hover>
       </v-flex>
      </v-layout>
      </div>
  </v-container>

</template>

<script>
export default {
    beforeEnter: to => {
  window.open(to.fullPath.substring(1), '_blank');
},

    data() {
        return{
    projects:[
        {name: '15SOF', img: '15.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}, 
            { plat: 'Android', icon: 'android'},
            { plat: 'iOS', icon: 'mdi-apple'}]},          
            {name: 'Smartcrete', img: 'smart.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}, 
            { plat: 'Android', icon: 'android'}]},
            {name: 'Noir Partner', img: 'partner.png', platforms: [
            { plat:'Web',  icon: 'mdi-web'}]}
            ]
        }
    }

}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}

h1{
    color: #4DB6AC;
    text-transform: uppercase ;
}


.project-decription {
    text-align: center;
    font-weight: 700;
}

.icon-group { 
    margin:auto;
    padding-right: 10px;
}

#icon { 
    margin-bottom: 20px;
}

</style>