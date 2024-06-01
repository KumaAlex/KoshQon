import {loadFromLocalStorage} from '@/services/localStorage'
import {useUserStore} from "../stores/user";
import router from "@/router";

export function validateForm(phone: string, password: string) {

    let existingAccounts = loadFromLocalStorage('accounts');
    if (existingAccounts) {
        for (let i = 0; i < existingAccounts.length; i++) {
            if (existingAccounts[i].login === phone && existingAccounts[i].password === password) {
                useUserStore().login(existingAccounts[i].login, existingAccounts[i].password, existingAccounts[i].name, existingAccounts[i].surname, existingAccounts[i].gender, existingAccounts[i].favorites);
                router.push('/');
                return;
            }
        }
    }
}
