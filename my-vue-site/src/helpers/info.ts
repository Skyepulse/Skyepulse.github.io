// info.ts loads info.json and provides a global object with the static data.
import { ref } from 'vue';
import infoJson from '@src/assets/info.json';

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
const info = ref<Info | null>(infoJson as Info);

//================================//
export function useInfo() {
    return {
        info
    };
}