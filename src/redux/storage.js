export function setItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));      
    } catch (error) {
        console.error(error);
    }
}

export function getItem(key) {
    try {
        const state =  JSON.parse(localStorage.getItem(key));

        if (state) {
            return state;
        }
    } catch (error) {
        console.error(error);
    }
}
