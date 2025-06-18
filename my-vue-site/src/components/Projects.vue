<template>
    <div id="ProjectsWrapper" class="w-full flex flex-column justify-center items-center bg-white">
        <div class="flex flex-col items-center justify-center w-full h-full">

            <!-- Project Title -->
            <h1 class=" text-5xl text-center font-bold text-gray-800 ml-2 mr-2 mb-4 pb-4 mt-4 border-b-2">{{ ProjectTitle }}</h1>

            <!-- Type Filter -->
            <div id="type-wrapper" class="flex flex-wrap flex-row items-center justify-center w-[95%] mb-4">
                <!-- One box per type rendered -->
                <div v-for="type in types" :key="type" class="flex items-center justify-center m-2">
                    <button 
                        class="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md"
                        :class="{'bg-gray-500 text-white': isTypeSelected(type), 'hover:bg-gray-400 cursor-pointer': !isMobile}"
                        @click="toggleType(type, type === 'All')"
                    >
                        {{ type }}
                    </button>
                </div>
            </div>

            <!-- Projects List -->
            <div id="projects-list" class="flex flex-col items-center justify-center w-[65%]">
                <div v-for="project in filteredProjects" :key="project.title" class = "w-full">
                    <ProjectEl 
                        :isMobile="isMobile"
                        :title="project.title"
                        :image="project.image"
                        :description="project.description"
                        :link="project.link"
                        :types="project.types"
                        :year="project.year"
                    />
                </div>
            </div>

            <!-- Show More Button -->
            <button 
                class="mt-4 mb-6 px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md"
                :class="{'hover:bg-gray-400 cursor-pointer':!isMobile}"
                @click="toggleShowMore"
            >
                {{ MoreThanThreeProjects ? 'Show Less' : 'Show More' }}
            </button>
        </div> 
    </div>
</template>

<script setup lang="ts">
    import { ref, watchEffect, watch, computed } from 'vue';
    import { useInfo } from '@src/helpers/info';
    import type { Project } from '@src/helpers/info';
    import ProjectEl from '@src/components/Elements/ProjectEl.vue';

    const { info } = useInfo();

    const projects = ref<Project[]>([]);
    const types = ref<string[]>([]);
    const MoreThanThreeProjects = ref<boolean>(false);

    const selectedTypes = ref<string[]>(['All']);

    const ProjectTitle = computed(() => { return info.value?.Projects?.title || 'Projects'; });

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

    //================================//
    watchEffect(() => {
    if (info.value?.Projects) {
        projects.value = info.value.Projects.projects;
        types.value = info.value.Projects.types;
    }
    });

    //================================//
    const toggleType = (type: string, isAll: boolean) => {
        if (isAll) {
            selectedTypes.value = ['All'];
            return;
        } else {
            selectedTypes.value = selectedTypes.value.filter(t => t !== 'All');
        }

        if (selectedTypes.value.includes(type)) {
            selectedTypes.value = selectedTypes.value.filter(t => t !== type);
        } else {
            selectedTypes.value.push(type);
        }

        if (selectedTypes.value.length === 0) {
            selectedTypes.value = ['All'];
        }
    };

    //================================//
    const isTypeSelected = (type: string) => {
        return selectedTypes.value.includes(type);
    };

    //================================//
    const filteredProjects = computed(() => {
        
        const showCount = isMobile.value ? 2 : 3;
        if (selectedTypes.value.includes('All')) {
            return !MoreThanThreeProjects.value ? projects.value.slice(0, showCount) : projects.value;
        }

        const filtered = projects.value.filter(project => 
            selectedTypes.value.every(selectedType => project.types.includes(selectedType))
        );
        
        return !MoreThanThreeProjects.value ? filtered.slice(0, showCount) : filtered;
    });

    //================================//
    const toggleShowMore = () => {
        MoreThanThreeProjects.value = !MoreThanThreeProjects.value;
    };

</script>