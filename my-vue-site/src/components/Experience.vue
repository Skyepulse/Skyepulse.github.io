<template>
    <div id="ExperienceWrapper" class="w-full flex flex-column items-center bg-neutral-50">
        <div class="flex w-full" :class="{'flex-row justify-start items-start': !isMobile, 'flex-col justify-center items-start': isMobile}">
            <div id="Professional" class="flex flex-col justify-center items-center mt-4 mb-4" :class="{'w-[50%]':!isMobile, 'w-full':isMobile}">
                <h1 class="text-3xl font-bold text-gray-800 mb-4 border-b-2 pb-3">Professional Experience</h1>
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
                        :last="index === ProfessionalExperience.length - 1"
                    />
                </div>
            </div>
            <div id="Academics" class="flex flex-col justify-center items-center mt-4 mb-4" :class="{'w-[50%]':!isMobile, 'w-full':isMobile}">
                <h1 class="text-3xl font-bold text-gray-800 mb-4 border-b-2 pb-3">Academic Experience</h1>
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
                        :last="index === AcademicExperience.length - 1"
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

    const { info } = useInfo();

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