
export const notify = (message, type = 'info') => {
    if (toast[type]) {
        toast[type](message);
    } else {
        console.warn(`Invalid toast type: ${type}. Defaulting to 'info'.`);
        toast.info(message);
    }
};

export const API_URL = import.meta.env.VITE_API_URL;
