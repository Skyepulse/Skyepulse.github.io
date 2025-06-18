<template>
    <div id="Experience" class="flex items-start justify-center mt-1 mb-1"  :class="{'flex-row': !inverted, 'flex-row-reverse': inverted, 'w-[80%]': !isMobile, 'w-full': isMobile, 'pr-5': isMobile && !inverted}">
        <!-- Logo and year -->
        <div class="flex flex-col w-[30%] h-full justify-center items-center">
            <a :href="link" target="_blank">
                <img :src="logo" class="w-20 h-auto mb-2 object-cover" alt="Company Logo" :class="{'hover:scale-105': !isMobile}"/>
            </a>
            <span class="text-gray-600 text-1xl font-bold">{{ startYear === endYear ? startYear : `${startYear} - ${endYear}` }}</span>
            
            <!-- Small triangle upwards -->
            <div v-if="index === 0" class="w-0 h-0 p-0 m-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black"></div>
            <div class="w-1 h-full border-0" :class="{'bg-gradient-to-b from-black to-transparent': last, 'bg-black': !last}"></div>
        </div>

        <!-- content -->
        <div class="flex flex-col justify-center w-[70%] mb-10" :class="{'items-start': !inverted, 'items-end': inverted}">
            <h1 class="text-2xl font-bold text-gray-800 ml-2" :class="{'text-left': !inverted, 'text-right': inverted}">{{ title }}</h1>
            <span class=" text-teal-950 text-sm mr-2 font-bold">{{ duration }} - {{ where }}</span>
            
            <!-- Bullet point pet string in description -->
            <ul class="list-disc pl-6 text-gray-500 text-lg font-bold mb-4 text-justify">
                <li v-for="(desc, index) in description" :key="index" class=" leading-tight " :class="{'mb-3 mt-1':index === 0}">{{ desc }}</li>
            </ul>
            <div id="type-wrapper" class="flex flex-wrap flex-row items-center w-full pl-2" :class="{'justify-start': !inverted, 'justify-end': inverted}">
                <!-- One box per type rendered -->
                <div v-for="type in types" :key="type" class="flex items-center justify-center m-2">
                    <div 
                        class="px-2 py-1 bg-gray-300 text-gray-800 border-2 font-semibold rounded-lg shadow-md"
                    >
                        {{ type }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';

    //================================//
    const props = defineProps({
        index: {
            type: Number,
            default: 0
        },
        inverted: {
            type: Boolean,
            default: false
        },
        isMobile: {
            type: Boolean,
            default: false
        },
        startYear: {
            type: Number,
            default: 1984
        },
        endYear: {
            type: Number,
            default: 1984
        },
        duration: {
            type: String,
            default: "default duration"
        },
        where: {
            type: String,
            default: "default"
        },
        logo: {
            type: String,
            default: "experiencePictures/Ubisoft.png"
        },
        title: {
            type: String,
            default: "default"
        },
        description: {
            type: Array as () => string[],
            default: () => []
        },
        link: {
            type: String,
            default: "www.skyepulse.github.io"
        },
        types: {
            type: Array as () => string[],
            default: () => []
        },
        last: {
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