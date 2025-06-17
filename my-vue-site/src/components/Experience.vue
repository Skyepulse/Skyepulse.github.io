<template>
    <div id="ExperienceWrapper" class="w-full flex flex-column items-center bg-neutral-200">

        <!--If loading info-->
        <span v-if="isLoading" class="text-center text-2xl text-gray-800">Loading...</span>

        <!--If error loading info-->
        <span v-else-if="error" class="text-center text-2xl text-red-600">Error loading info: {{ error.message }}</span>

        <div v-else class="flex w-full" :class="{'flex-row justify-start items-start': !isMobile, 'flex-column justify-center items-start': isMobile}">
            <div id="Professional" class="flex flex-col justify-center items-center mt-4 mb-4" :class="{'w-[50%]':!isMobile, 'w-full':isMobile}">
                <h1 class="text-4xl font-bold text-gray-800 mb-4 border-b-2 pb-3">Professional Experience</h1>
                <div v-for="(experience, index) in ProfessionalExperience" :key="index" class ="w-full flex justify-end">
                    <ExperienceEl
                        :index="index" 
                        :isMobile="isMobile"
                        :inverted="true"
                        :startYear="experience.startYear"
                        :endYear="experience.endYear"
                        :duration="experience.duration"
                        :where="experience.where"
                        :logo="experience.logo"
                        :title="experience.title"
                        :description="experience.description"
                        :link="experience.link"
                        :types="experience.types"
                    />
                </div>
            </div>
            <div id="Academics" class="flex flex-col justify-center items-center mt-4 mb-4" :class="{'w-[50%]':!isMobile, 'w-full':isMobile}">
                <h1 class="text-4xl font-bold text-gray-800 mb-4 border-b-2 pb-3">Academic Experience</h1>
                <div v-for="(experience, index) in AcademicExperience" :key="index" class="w-full flex justify-start">
                    <ExperienceEl
                        :index="index" 
                        :isMobile="isMobile"
                        :inverted="false"
                        :startYear="experience.startYear"
                        :endYear="experience.endYear"
                        :duration="experience.duration"
                        :where="experience.where"
                        :logo="experience.logo"
                        :title="experience.title"
                        :description="experience.description"
                        :link="experience.link"
                        :types="experience.types"
                    />
                </div>
            </div>
        </div> 
    </div>
</template>

<script setup lang="ts">
    import {ref, watch, watchEffect } from 'vue';
    import { useInfo } from '@src/helpers/info';
    import type { Experience } from '@src/helpers/info';
    import ExperienceEl from '@src/components/Elements/ExperienceEl.vue';

    const { info, isLoading, error } = useInfo();

    const AcademicExperience = ref<Experience[]>([]);
    const ProfessionalExperience = ref<Experience[]>([]);

    //================================//
    const props = defineProps({
        isMobile: {
        type: Boolean,
        default: false
        }
    });
    const isMobile = ref(props.isMobile);

    watch(
        () => props.isMobile,
        (val) => {
            isMobile.value = val;
        }
    );

    //================================//
    watchEffect(() => {
        if (info.value?.Experience) {
            AcademicExperience.value = info.value.Experience.Academics;
            ProfessionalExperience.value = info.value.Experience.Professional;
        }
    });

</script>