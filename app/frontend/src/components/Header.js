import React from 'react';
import {useDataContext} from "../contexts/DataContext";
import {useLanguageContext} from "../contexts/LanguageContext";
import {makeStyles} from "@material-ui/core";
import {standTypeResolver} from "../utils/standTypeResolver";

const useStyles = makeStyles(theme => ({
    underline: {
        borderBottom: '2px solid black',
        width: 'auto',
        display: 'inline-block',
        paddingRight: '20px'
    }
}));

export const Header = () => {
    const {tokenData: {companyName = "Unknown", type = "Unknown"} = {}} = useDataContext();
    const {t} = useLanguageContext();
    const classes = useStyles();

    return <div>
        <h1 className={classes.underline}>{t("STAND_SELECTION")}: {companyName} / {standTypeResolver(type, t)}</h1>
    </div>;
};


