<template>
    <div id="HomeWrapper" class="w-full pt-[10vh] flex flex-row justify-center items-center bg-neutral-50" :class="{'h-[90vh]': !isMobile, '': isMobile}">

        <!--If loading info-->
        <span v-if="isLoading" class="text-center text-2xl text-gray-800">Loading...</span>

        <!--If error loading info-->
        <span v-else-if="error" class="text-center text-2xl text-red-600">Error loading info: {{ error.message }}</span>

        <!--If info loaded-->
        <div v-else class="flex w-full h-full" :class="{'flex-col items-center justify-start': isMobile, 'flex-row items-center justify-center': !isMobile}">

            <!-- Not Mobile-->
            <div v-if="!isMobile" id="image-wrapper" class="flex flex-col items-center justify-center h-full w-[35%]">
                <img :src="profileImage" :class="imageSize" class="rounded-full object-cover shadow-lg" alt="Profile Image" />
            </div>
            <div v-if="!isMobile" id="text-wrapper" class="flex flex-col items-center justify-center h-full w-[65%]">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ homeTitle }}</h1>
                <p class="text-lg text-gray-600 text-justify pl-[10%] pr-[10%] mb-10    ">{{ homeDescription }}</p>
                <div id ="embedded-icons" class="flex flex-row items-center justify-center w-full">
                    <a href="https://github.com/Skyepulse" v-tooltip="'GitHub'">
                        <img :src="ghBlack" class="w-16 h-16 mx-2" alt="GitHub Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ma%C3%ABl-rios-011564262/" v-tooltip="'LinkedIn'">
                        <img :src="lkBlack" class="w-16 h-16 mx-2" alt="LinkedIn Icon" />
                    </a>
                </div>
            </div>

            <!-- Mobile-->
             <div v-if="isMobile" id="image-wrapper" class="flex flex-col items-center justify-center w-full pt-10 mb-10">
                <img :src="profileImage" :class="imageSize" class="rounded-full object-cover shadow-lg" alt="Profile Image" />
            </div>
            <div v-if="isMobile" id="text-wrapper" class="flex flex-col items-center justify-center w-full pl-[10%] pr-[10%]">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ homeTitle }}</h1>
                <p class="text-lg text-gray-600 text-justify mb-4">{{ homeDescription }}</p>
                <div id ="embedded-icons" class="flex flex-row items-center justify-center w-full mb-10">
                    <a href="https://github.com/Skyepulse">
                        <img :src="ghBlack" class="w-16 h-16 mx-2" alt="GitHub Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ma%C3%ABl-rios-011564262/">
                        <img :src="lkBlack" class="w-16 h-16 mx-2" alt="LinkedIn Icon" />
                    </a>
                </div>
            </div>
        </div>
        
    </div>

</template>

<script setup lang="ts">
    import { ref, computed, watch} from 'vue';
    import { useInfo } from '@src/helpers/info';
    import profileImage from '@src/assets/pfp.jpg';
    import ghBlack from '@src/assets/icons/Github_black.png';
    import ghWhite from '@src/assets/icons/Github_white.png';
    import lkBlack from '@src/assets/icons/LinkedIN_black.png';
    import lkWhite from '@src/assets/icons/LinkedIN_white.png';

    const { info, isLoading, error } = useInfo();
    const homeTitle = computed(() => info.value?.Home.title ?? 'Default Title');
    const homeDescription = computed(() => info.value?.Home.description ?? 'Default Description');

    const imageSize = computed(() => {
        return isMobile.value ? 'w-64 h-64' : 'w-100 h-100';
    });

    //================================//
    const props = defineProps({
        isMobile: {
        type: Boolean,
        default: false
        }
    });
    const isMobile = ref(props.isMobile);

    //================================//
    watch(
        () => props.isMobile,
        (val) => {
            isMobile.value = val;
        }
    );

</script>