<template>
    <div id="Project" class="flex flex-row items-start justify-center w-full mt-1 mb-4">
        
        <!-- Year and types -->
        <div class="flex flex-col items-end justify-start w-[30%]">
            <h3 class="text-3xl font-bold text-gray-800 mb-2 mr-2 border-5 rounded-full pl-2 pr-2 text-center">{{ year }}</h3>
            <div id="type-wrapper" class="flex flex-wrap flex-row items-center justify-end w-full">
                <!-- One box per type rendered -->
                <div v-for="type in types" :key="type" class="flex items-center justify-center m-2">
                    <div 
                        class="px-4 py-2 bg-gray-300 text-gray-800 border-2 font-semibold rounded-lg shadow-md"
                    >
                        {{ type }}
                    </div>
                </div>
            </div>
        </div>

        <!-- content -->
         <div class="flex flex-col items-start justify-center w-[70%] ">
            <h1 class="text-3xl text-left font-bold text-gray-800 ml-2">{{ title }}</h1>
            <img :src="image" class="w-full h-auto rounded-lg border-2 border-black mt-2 mb-2" alt="Project Image" 
                :class="{'cursor-pointer hover:scale-102 transition-all duration-200': true}"
                @click="handleClick"
            />
            <p class="text-lg text-gray-500 font-bold pl-2 mb-4 text-left" :class="{'leading-tight':isMobile}">{{ description }}</p>
            <div class="flex flex-row items-center justify-start w-full pl-2 mb-4">
                <template v-if="link.startsWith('http://') || link.startsWith('https://')">
                    <a :href="link" target="_blank" class="text-2xl text-gray-600 underline font-bold hover:underline">Visit Project Website</a>
                </template>
                <template v-else>
                    <a :href="link" target="_blank" class="text-2xl text-gray-600 underline font-bold hover:underline">Learn More about this project</a>
                </template>
            </div>
         </div>
    </div>

</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';

    //================================//
    const props = defineProps({
        isMobile: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Default Project Title'
        },
        image: {
            type: String,
            default: 'ProjectPictures/CNN.png'
        },
        description: {
            type: String,
            default: 'Default Project Description'
        },
        link: {
            type: String,
            default: 'www.skyepulse.github.io'
        },
        types: {
            type: Array as () => string[],
            default: () => ['All']
        },
        year: {
            type: Number,
            default: 1984
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

    //================================//
    const handleClick = () => {
        window.open(props.link, '_blank');
    };
</script>