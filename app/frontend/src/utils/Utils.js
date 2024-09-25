import {translations} from "../constants/translations";

export const Utils = {
    getBrowserLanguage: () => {
        const language = (navigator.language || navigator.userLanguage || "EN").split('-')[0].trim().toUpperCase();
        return Object.keys(translations).includes(language) ? language : "EN";
    }
};