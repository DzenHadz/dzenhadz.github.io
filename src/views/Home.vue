<template>
  <div class="home secondary">
    <Navbar/>
    <Terminal id=""/>
    <Services id="services"/>
    <Project/>
    <Skills id="skills"/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Project from '@/components/Project.vue'
import Footer from '@/components/Footer.vue'
import Terminal from '@/components/Terminal.vue'
import Skills from '@/components/Skills.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'


export default {
  name: 'home',
  components: {
    Navbar,
    Project,
    Footer,
    Skills,
    Terminal,
    Services, 
    Contact
  }
}
</script>
