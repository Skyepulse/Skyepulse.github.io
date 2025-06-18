<template>
    <div id="ContactWrapper" class="w-full flex flex-col items-center justify-center bg-neutral-50">
        <h1 class="text-5xl font-bold text-gray-800 mb-4 border-b-2 pb-3">Contact Me</h1>
        <form @submit.prevent="submitForm" class="space-y-4">
            <input
                v-model="form.email"
                type="email"
                placeholder="Your email"
                class="w-full text-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-black bg-white border-2 border-gray-200"
                required
            />
            <input
                v-model="form.subject"
                type="text"
                placeholder="Subject"
                class="w-full text-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-black bg-white border-2 border-gray-200"
                required
            />
            <textarea
                v-model="form.message"
                placeholder="Your message"
                rows="5"
                class="w-full text-gray-500 rounded-lg p-3 focus:ring-2 focus:ring-black bg-white border-2 border-gray-200"
                required
            ></textarea>
            <button
                type="submit"
                :disabled="isLoading"
                class="border-2 border-gray-300 w-full mb-6 px-6 py-2 rounded-lg text-gray-500"
                :class="{'hover:bg-gray-400 cursor-pointer hover:text-white': !isMobile, 'bg-gray-300': isLoading}"
            >
                {{ isLoading ? "Sending..." : "Send Message" }}
            </button>
            <p v-if="feedback" class="mb-6 w-full text-sm text-gray-700">{{ feedback }}</p>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';

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

    //================================//
    const form = ref({
        email: '',
        subject: '',
        message: '',
    });
    
    //================================//
    const isLoading = ref(false);
    const feedback = ref('');

    //================================//
    async function submitForm() {
        isLoading.value = true;
        feedback.value = '';

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form.value),
            });

            if (!res.ok) throw new Error('Failed to send');

            feedback.value = 'Message sent successfully!';
            form.value = { email: '', subject: '', message: '' };

        } catch (err) {
            feedback.value = 'Something went wrong. Try again.';
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }
</script>