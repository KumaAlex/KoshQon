import { ref } from 'vue';
import { defineStore } from 'pinia';

interface UserLogin {
    login: string
    password: string
}

export const useProfileStore = defineStore('profile', () => {


    const BASE_URL = "localhost:3000"
    const jwtToken = ref("")
    const isLogged = ref(false);

    const login = async (loginData: UserLogin) => {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                body: JSON.stringify({ loginData }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const responseData: { token?: string } = await response.json();
                if (responseData.token) {
                    jwtToken.value = responseData.token;
                } else {
                    console.error('Token not found in response');
                }
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };


    const logout = async () => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${ accessToken }`
                }
            });

            if (response.ok) {
                isLogged.value = false;
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return { isLogged, login, logout };
});