import { ref } from 'vue';
import { defineStore } from 'pinia';
import {updateFavsStorage} from "@/services/localStorage";
import router from "@/router";


export const useUserStore = defineStore('user', () => {

    const isLogged = ref(false);
    const phone = ref('');
    const password = ref('');
    const name = ref('');
    const surname = ref('');
    const gender = ref('');
    const favorites = ref([0]);

    const login = (userPhone: string, userPassword: string, userName: string, userSurname: string, userGender: string, userFavorites: [] = []) => {
        isLogged.value = true;
        phone.value = userPhone;
        password.value = userPassword;
        name.value = userName;
        surname.value = userSurname;
        gender.value = userGender;
        favorites.value = userFavorites;
    };

    const logout = () => {
        isLogged.value = false;
        password.value = '';
        name.value = '';
        surname.value = '';
        gender.value = '';
        updateFavsStorage(phone.value, favorites.value);
        phone.value = '';
        favorites.value = [];
        console.log("ASD");
        router.push('/');
    };

    const changeFavorites = (newFavs: number[]) => {
        favorites.value = newFavs;
        console.log(favorites.value);
    }

    return { isLogged, login, logout, phone, password, name, surname, gender, favorites, changeFavorites };
});