<template>
    <div id="nav-bar" ref="navbarRef" class="fixed top-0 left-0 w-full bg-neutral-200 z-50 transition-all duration-300 border-b-1 border-gray-400" :class="{'h-[10vh]': !dropDownOpen, 'h-[25vh]': dropDownOpen}">
        <div class="flex items-center justify-between h-[10vh] pl-4" :class="{'pr-20': !isMobile, 'pr-4': isMobile}">
            <router-link to="/" class="text-2xl font-bold text-gray-800 pl-5">
                Maël Rios
            </router-link>
            <nav v-if="!isMobile" class="flex space-x-4">
                <router-link to="/experience" class="text-gray-600 hover:text-gray-800">Experience</router-link>
                <router-link to="/projects" class="text-gray-600 hover:text-gray-800">Projects</router-link>
                <router-link to="/contact" class="text-gray-600 hover:text-gray-800">Contact</router-link>
                <a href="/legacy/index.html" class="text-purple-800 hover:text-gray-800 font-bold" v-tooltip="'Visit my old website!'">Legacy Website</a>
            </nav>
            <div v-else class="cursor-pointer" @click="clickDropDown">
              <img src="@src/assets/drop-down.svg" class="w-6 h-6" alt="Dropdown" />
            </div>
        </div>
        <transition name="fade-slide">
          <nav
            v-if="isMobile && dropDownOpen"
            class="flex h-[15vh] flex-col items-start px-4 pt-0 space-y-2 overflow-hidden"
          >
            <router-link to="/experience" class="text-gray-600 hover:text-gray-800">Experience</router-link>
            <router-link to="/projects" class="text-gray-600 hover:text-gray-800">Projects</router-link>
            <router-link to="/contact" class="text-gray-600 hover:text-gray-800">Contact</router-link>
            <a href="/legacy/index.html" class="text-purple-800 hover:text-gray-800 font-bold">Legacy Website</a>
          </nav>
        </transition>
    </div>
</template>

<script setup lang="ts">
  import { ref, watch, onMounted, onUnmounted } from 'vue';

  //================================//
  const props = defineProps({
    isMobile: {
      type: Boolean,
      default: false
    }
  });
  const isMobile = ref(props.isMobile);
  const dropDownOpen = ref(false);
  const navbarRef = ref<HTMLElement | null>(null);

  //================================//
  watch(
    () => props.isMobile,
    (val) => {
      isMobile.value = val;
      if (!val) dropDownOpen.value = false;
    }
  );

  //================================//
  const clickDropDown = () => {
    dropDownOpen.value = !dropDownOpen.value;
  };

  //================================//
  function handleClickOutside(event: MouseEvent) {
    if (
      dropDownOpen.value &&
      navbarRef.value &&
      !navbarRef.value.contains(event.target as Node)
    ) {
      dropDownOpen.value = false;
    }
  }

  // Close on resize
  function handleResize() {
    dropDownOpen.value = false;
  }

  // Lifecycle
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
  });
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener('resize', handleResize);
  });
</script>

<style scoped>
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.3s ease;
  }
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>