import React from 'react';
import {LoadingPage} from "./LoadingPage";
import {WrongTokenPage} from "./WrongTokenPage";
import {Status} from "../constants/status";
import {MainPage} from "./MainPage";
import {useDataContext} from "../contexts/DataContext";

export const PageResolver = () => {
    const {status} = useDataContext();

    switch (status) {
        case Status.WRONG_TOKEN:
            return <WrongTokenPage/>;
        case Status.LOADING:
            return <LoadingPage/>;
        default:
            return <MainPage/>
    }
};
