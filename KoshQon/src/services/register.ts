import {updateLocalStorage, loadFromLocalStorage} from '@/services/localStorage'
import router from "@/router";
import {useUserStore} from "@/stores/user";

export function validateForm(phone: string, password: string, name: string, surname: string, gender: string) {
        const passwordMinLength = 8;

        if (phone.length != 11) {
            alert('Такого номера не существует');
            return
        }

        if (password.length < passwordMinLength) {
            alert('Пароль должен содержать минимум 8 символов');
            return;
        }


        let existingAccounts = loadFromLocalStorage('accounts');
        if (existingAccounts) {
            for (let i = 0; i < existingAccounts.length; i++) {
                if (existingAccounts[i].login === phone) {
                    alert('Login already exist')
                    return;
                }
            }
        }


        let user = {
            login: phone,
            password: password,
            favorites: [],
            name: name,
            surname: surname,
            gender: gender,
        }
        updateLocalStorage('accounts', user);

        useUserStore().login(user.login, user.password, user.name, user.surname, user.gender);

        router.push('/')
    }
