export const getApiBaseUrl = () => {
    const url = import.meta.env.VITE_API_BASE_URL;
    if (!url) {
        console.warn("VITE_API_BASE_URL is not defined in environment variables.");
        return "";
    }
    // Remove trailing slash if present
    return url.endsWith("/") ? url.slice(0, -1) : url;
};

export const API_BASE_URL = getApiBaseUrl();
