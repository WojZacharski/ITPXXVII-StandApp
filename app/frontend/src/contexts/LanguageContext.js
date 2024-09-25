import React from 'react';
import {Utils} from "../utils/Utils";
import {translations} from "../constants/translations";

export const LanguageContext = React.createContext(null);
export const useLanguageContext = () => React.useContext(LanguageContext);

export const LanguageProvider = (props) => {
    const [language, setLanguage] = React.useState(Utils.getBrowserLanguage());
    const t = (word) => translations[language][word] || translations["EN"][word] || word;

    return <LanguageContext.Provider value={{setLanguage, language, t}}>
        {props.children}
    </LanguageContext.Provider>
};