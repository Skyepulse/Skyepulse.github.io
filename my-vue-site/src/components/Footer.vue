<template>
    <div id="FooterWrapper" class="w-full flex flex-row items-center bg-neutral-900">
        <div id="copyright" class="w-full flex justify-center items-center p-4">
            <p class="text-gray-100 text-lg">© 2025. Website custom-built by me. All rights reserved.</p>
        </div>
        <div id="socials" class="flex flex-row items-center justify-center w-full">
            <a href="https://github.com/Skyepulse" v-tooltip="'GitHub'">
                <img :src="ghWhite" class="w-8 h-8 mx-2" alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/ma%C3%ABl-rios-011564262/" v-tooltip="'LinkedIn'">
                <img :src="lkWhite" class="w-8 h-8 mx-2" alt="LinkedIn Icon" />
            </a>
            <a href="https://githubpagesvideos.s3.eu-north-1.amazonaws.com/cv.pdf" v-tooltip="'Resume'">
                <img :src="resumeBlack" class="w-9 h-9 mx-2 bg-white rounded-full" alt="Resume Icon" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    //import ghBlack from '@src/assets/icons/Github_black.png';
    import ghWhite from '@src/assets/icons/Github_white.png';
    //import lkBlack from '@src/assets/icons/LinkedIN_black.png';
    import lkWhite from '@src/assets/icons/LinkedIN_white.png';
    import resumeBlack from '@src/assets/icons/resume.png';


    //================================//
    const props = defineProps({
        isMobile: {
            type: Boolean,
            default: false
        }
    });

    //================================//
    const isMobile = ref(false);

    //================================//
    watch(
        () => props.isMobile,
        (val) => {
            isMobile.value = val;
        }
    );
</script>   