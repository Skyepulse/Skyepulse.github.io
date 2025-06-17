// info.ts loads info.json and provides a global object with the static data.
import { ref, watchEffect} from 'vue';
import { useFetch } from '@vueuse/core';

//================================//
export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    types: string[];
    year: number;
};

export interface Experience {
    startYear: number;
    endYear: number;
    duration: string;
    title: string;
    where: string;
    logo: string;
    description: string[];
    link: string;
    types: string [];
};

interface Info {
    Home: {
        title: string;
        description: string;
    },
    Experience: {
        title: string;
        Professional: Experience[];
        Academics: Experience[];
    },
    Projects: {
        title: string;
        types: string[];
        projects: Project[];
    },
}

//================================//
const info = ref<Info | null>(null);
const isLoading = ref(true);
const { data, error } = useFetch('info.json').json().get();


//================================//
watchEffect(() => {
    if (error.value) {
        console.error('Error loading info.json:', error.value);
        isLoading.value = false;
    } else if (data.value) {
        info.value = data.value;
        isLoading.value = false;
        console.log('info.json loaded successfully:', info.value);
    }
});

//================================//
export function useInfo() {
    return {
        info,
        isLoading,
        error
    };
}