<template>
    <div id="nav-bar" ref="navbarRef" class="fixed top-0 left-0 w-full bg-neutral-200 z-50 transition-all duration-300" :class="{'h-[10vh]': !dropDownOpen, 'h-[25vh]': dropDownOpen}">
        <div class="flex items-center justify-between h-[10vh] pl-4" :class="{'pr-20': !isMobile, 'pr-4': isMobile}">
            <div class="text-2xl font-bold text-gray-800">
                Maël Rios
            </div>
            <nav v-if="!isMobile" class="flex space-x-4">
                <a href="/" class="text-gray-600 hover:text-gray-800">Home</a>
                <a href="/about" class="text-gray-600 hover:text-gray-800">About</a>
                <a href="/contact" class="text-gray-600 hover:text-gray-800">Contact</a>
            </nav>
            <div v-else class="cursor-pointer" @click="clickDropDown">
              <img src="@src/assets/drop-down.svg" class="w-6 h-6" alt="Dropdown" />
            </div>
        </div>
        <transition name="fade-slide">
          <nav
            v-if="isMobile && dropDownOpen"
            class="flex h-[15vh] flex-col items-start px-4 pt-4 space-y-2"
          >
            <a href="/" class="text-gray-600 hover:text-gray-800">Home</a>
            <a href="/about" class="text-gray-600 hover:text-gray-800">About</a>
            <a href="/contact" class="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </transition>
    </div>
</template>

<script setup lang="ts">
  import { defineProps, ref, watch, onMounted, onUnmounted } from 'vue';

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