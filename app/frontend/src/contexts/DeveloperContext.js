import React from 'react';

export const DeveloperContext = React.createContext(false);
export const useDeveloperContext = () => React.useContext(DeveloperContext);

export const DeveloperProvider = (props) => {
    const [devMode, setDeveloperMode] = React.useState(false);

    window.setDevMode = setDeveloperMode;
    window.isDevMode = () => devMode;

    return <DeveloperContext.Provider value={devMode}>
        {props.children}
    </DeveloperContext.Provider>
};