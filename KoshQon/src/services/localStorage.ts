function saveToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocalStorage(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

function updateLocalStorage(key: string, newValue: any): void {
    const item = loadFromLocalStorage(key);
    if (!item) {
        saveToLocalStorage(key, [newValue]);
    }
    else {
        const updatedItem = [...item, newValue];
        saveToLocalStorage(key, updatedItem);
    }
}

function updateFavsStorage(phone: string, favs: number[]): void {
    let accounts = loadFromLocalStorage('accounts');
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].login === phone) {
            accounts[i].favorites = favs;
        }
    }
    saveToLocalStorage('accounts', accounts)
}

export {
    saveToLocalStorage,
    loadFromLocalStorage,
    updateLocalStorage,
    updateFavsStorage
};
