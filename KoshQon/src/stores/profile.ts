import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
    const isLogged = ref(false)
    const login = () => {
        isLogged.value = true;
    }
    const logout = () => {
        isLogged.value = false;
    }

    return { isLogged, login, logout }
})
