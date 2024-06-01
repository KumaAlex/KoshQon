import {useUserStore} from "@/stores/user";

export function toggleFavById(ansID: number, userStore = useUserStore()) {
    let exist = false;
    const favorites = userStore.favorites;


    for (let i = 0; i < favorites.length; i++) {
        if (ansID === favorites[i]) {
            exist = true;
            let newFav = favorites.filter(i => i !== ansID);
            userStore.changeFavorites(newFav);
        }
    }

    if (!exist) {
        let newFav = [...favorites];
        newFav.push(ansID);
        userStore.changeFavorites(newFav);
    }
}