<template>
  <NavBar :isMobile="isMobile"/>

  <!--a href="/legacy/index.html">View Legacy Site</a-->
</template>

<script setup lang="ts">
  import NavBar from '@src/components/NavBar.vue';

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
</script>