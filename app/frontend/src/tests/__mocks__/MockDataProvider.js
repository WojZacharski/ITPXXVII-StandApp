import React from 'react';
import {LanguageContext} from "../../contexts/LanguageContext";
import {DataContext} from "../../contexts/DataContext";

export const languageData = {
    language: "EN",
    setLanguage: jest.fn(),
    t: jest.fn(x => x)
};

export const dataData = {
    id: "123",
    setId: jest.fn(),
    saveChoice: jest.fn(),
    reservedStands: [],
    selectedStand: "",
    tokenData: {
        companyName: "Company Name",
        type: "4"
    },
    type: "",
    token: "",
    status: "",
};

export const MockDataProvider = (props) => <LanguageContext.Provider
    value={languageData}>
    <DataContext.Provider value={props.data ? {...dataData, ...props.data} : dataData}>
        {props.children}
    </DataContext.Provider>
</LanguageContext.Provider>;