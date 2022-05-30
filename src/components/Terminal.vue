<template>
    <v-container
        >
        <v-row>
            <v-col class="intro mt-15">
              <v-flex class="flex-grow-0">
                                 <v-avatar size="200">
        <img src='@/assets/Avatar.jpg'/>
      </v-avatar>
              <h2 class="intro-text paragraph--text">Hello, I'm Dženita.</h2>
              <hr class="intro-text paragraph--text" style="width:50%; margin-left:25% !important; margin-right:25% !important; border-top: 3px solid;">
       <v-card card="flex" class="secondary" tile flat>
          <v-btn
          id="about"
          fab
          v-for="link in links"
          :key="link.icon"
          class="mx-1"
          icon
          :href="link.to"
          target="_blank"
        >
          <v-icon size="30px" color="primary">
            {{ link.icon }}
          </v-icon>
        </v-btn>
       </v-card>
              </v-flex>
            </v-col>

        </v-row>
        <v-row>
                      <v-col
                right>
            
                <v-card class="terminal-card" >
                    <div class="terminal-window">
                        <header>
                            <div class="button green" />
                            <div class="button yellow" />
                            <div class="button red" />
                        </header>
                        <section class="terminal">
                            <div class="history" />
                            <div id="typed-strings">
                                <p><span class="gray"> $ </span>whoami ? ^500</p>
                                <p>
                                    <!-- code -->
                                    <span class="duo-2">const </span> <span class="duo-1">me </span> = <span class="duo-3"> new</span> <span class="uno-1">Human()</span>;<br>
                                    <br>
                                    <span class="uno-3">me.name</span> = "<span class="duo-1">Dženita Hadžajlija</span>";<br>
                                    <span class="uno-3">me.city</span> = "<span class="duo-1">Stockholm, Sweden</span>";<br>
									<span class="uno-3">me.born</span> = "<span class="duo-1">1996</span>";<br>
                                    <span class="uno-3">me.job</span> = "<span class="duo-1">QA Engineer</span>";<br>
                                    <span class="uno-3">me.degree</span> = "<span class="duo-1">Master of Mechanical Engineering</span>";<br>
                                    <span class="uno-3">me.yearsOfExperience</span> = <span class="duo-1" style="color: yellow">2</span>;<br>
                                    <br>
                                    <span class="duo-3">while </span> (<span class="uno-3">me.</span><span class="uno-1">isLive()</span>)<span> { </span>
									<pre>  <span class="uno-3">me.</span><span class="uno-1">testing()</span>;</pre>
                                    <pre>  <span class="uno-3">me.</span><span class="uno-1">coding()</span>;</pre>
                                    <pre>  <span class="uno-3">me.</span><span class="uno-1">eat()</span>;</pre>
									<pre>  <span class="uno-3">me.</span><span class="uno-1">train()</span>;</pre>

                                    <pre>  <span class="uno-3">me.</span><span class="uno-1">sleep()</span>;</pre>
                                    <br>
                                    <pre>  <span class="duo-3">if</span> (<span class="uno-3">day</span> <span class="duo-3">===</span> "<span class="uno-3">off</span>"){</pre>
                                    <pre>    <span class="uno-3">me.</span><span class="uno-1">yoga()</span>;</pre>
                                    <pre>    <span class="uno-3">me.</span><span class="uno-1">hiking()</span>;</pre>
                                    <pre>    <span class="uno-3">me.</span><span class="uno-1">netflix()</span>;</pre>
                                    <pre>  }</pre>
                                    <pre>}</pre> ^1500
                                    <!-- code -->
                                </p>
                            </div>
                            <span id="whoami" />
                            <span class="typed-cursor" />
                        </section>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Typed from "typed.js";
export default {
    data: () => ({
    links: [
      {
        icon: "mdi-linkedin",
        to: "https://www.linkedin.com/in/d%C5%BEenita-had%C5%BEajlija-2599561b3/",
      },
      { icon: "mdi-email", to: "mailto: hadzajlijadz@gmail.com" }
    ],
  }),
  mounted() {
    new Typed("#whoami", {
      stringsElement: "#typed-strings",
      startDelay: 2000,
      backSpeed: 15,
      typeSpeed: 1,
      loop: false,
      showCursor: false,
      contentType: "html",
    });
  },
};
</script>

<style>

.highlight{
  color: black;
}
.intro-text { 
  font-size: 50px;
}
.introduce{
  margin-top: 2%;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#whoami {
  white-space: pre-wrap;
}
@keyframes my-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.pagetitle {
  text-align: center;
}
.terminal-card {
  border-radius: 0.5rem 0.5rem 0 0;
  align-items: flex-end;
  width: 100%;
}
.terminal-window {
  text-align: left;
  width: auto;
  height: auto;
  min-height: 580px;
  border-radius: 8px 8px 0 0;
  margin: auto;
  position: relative;
  animation-name: my-fade-in;
  animation-duration: 4s;
}
.terminal-window header {
  background: #191919;
  height: 30px;
  border-radius: 0.5rem 0.5rem 0 0;
  padding-left: 10px;
}
.terminal-window header .button {
  width: 12px;
  height: 12px;
  margin: 10px 8px 0 0;
  display: inline-block;
  border-radius: 8px;
}
.terminal-window header .button.green {
  background: #32c146;
}
.terminal-window header .button.yellow {
  background: #f6b73e;
}
.terminal-window header .button.red {
  background: #f55551;
}
.terminal-window section.terminal {
  color: white;
  font-size: 11pt;
  background: #232323;
  white-space: pre;
  padding: 10px;
  box-sizing: border-box;
  border-bottom-left-radius: 0.5rem 0.5rem;
  border-bottom-right-radius: 0.5rem 0.5rem;
  position: absolute;
  width: 100%;
  top: 30px;
  bottom: 0;
  overflow: auto;
}
.terminal-window section.terminal .typed-cursor {
  opacity: 1;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
  display: inline;
}
.terminal-window .gray {
  color: gray;
}
.terminal-window .uno-1 {
  color: #d6e9ff;
}
.terminal-window .uno-3 {
  color: #88b4e7;
}
.terminal-window .uno-4 {
  color: #586f89;
}
.terminal-window .uno-5 {
  color: #444c55;
}
.terminal-window .duo-1 {
  color: #34febb;
}
.terminal-window .duo-2 {
  color: #32ae85;
}
.terminal-window .duo-3 {
  color: #57a784;
}
</style>