<template>
    <div id="Wrapper" class="w-full flex flex-col justify-center align-middle bg-white">
        <h1 class="text-4xl font-bold text-gray-800 mb-4 text-center w-full p-4">Gaussian Splatting for Real-Time Radiance Field Rendering</h1>
        <a href="https://github.com/Skyepulse/Gaussian_Surface_Reconstruction" v-tooltip="'GitHub Repository'" class="flex justify-center w-full mb-4">
            <img :src="ghBlack" class="w-12 h-12" alt="GitHub Icon" />
        </a>
        <div class="text-lg text-gray-500 font-bold text-left w-full p-4 pl-20 pr-20 pb-0" :class="{'leading-tight':isMobile}">
            <p class="mb-4">
                Gaussian Splatting and Neural Radiance Fields are powerful techniques 
                that propose some answers to the ill-defined problem of novel view synthesis in computer vision.
                If the optimization of splats was not an already difficult and expensive task, we tackle the problem
                of also reconstructing the geometry of the scene, from the same input data.
            </p>
            <p class="mb-4">
                The goal of this project was to explore state of the art papers working on this problem,
                with promising results and comparing the results to better understand the underlying optimization problems they solve.
            </p>
            <p class="mb-4">
                Most of these papers present innovative losses, models and in-the-loop extractions of the geometry,
                to constrain the optimization of the splats towards an accurate reconstruction of the scene surface.
            </p>
            <p class="mb-4">
                If you wish to learn more about the code behind these papers, and the comparison results we obtained,
                you can visit the github repository <a href="https://github.com/Skyepulse/Gaussian_Surface_Reconstruction" target="_blank" class="text-green-600 underline font-bold hover:underline">HERE</a>.
            </p>
        </div>

        <VuePdfEmbed :source="'https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GaussRecon.pdf'" class="m-0 p-0"/>
        <p class=" italic text-black text-sm text-center p-4">
            WallE model "Wall-E" (https://skfb.ly/o6vpK) by Juliestrator is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
        </p>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    import ghBlack from '@src/assets/icons/Github_black.png';
    import VuePdfEmbed from 'vue-pdf-embed'

    //================================//
    const props = defineProps({
        isMobile: {
            type: Boolean,
            default: false
        }
    });

    //================================//
    const isMobile = ref(props.isMobile);

    //================================//
    watch(
        () => props.isMobile,
        (val) => {
            isMobile.value = val;
        }
    );
</script>