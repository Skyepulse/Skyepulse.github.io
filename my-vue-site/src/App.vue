<template>
  <NavBar :isMobile="isMobile"/>
  <section id="home">
    <Home :isMobile="isMobile"/>
  </section>
  <section id="experience">
    <Experience :isMobile="isMobile"/>
  </section>
  <section id="projects">
    <Projects :isMobile="isMobile"/>
  </section>
  <section id="contact">
  </section>
</template>

<script setup lang="ts">
  import NavBar from '@src/components/NavBar.vue';
  import Home from '@src/components/Home.vue';
  import Projects from '@src/components/Projects.vue';
  import Experience from '@src/components/Experience.vue';

  import { ref, onMounted, onUnmounted } from 'vue';

  //================================//
  const isMobile = ref(false);

  //================================//
  const checkMobile = () => {
    isMobile.value = navigator.maxTouchPoints > 1 || window.innerWidth <= 768;
  };

  //================================//
  onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
  });

  //================================//
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
  });
</script>