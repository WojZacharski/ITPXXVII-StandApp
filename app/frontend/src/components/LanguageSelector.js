import React from 'react';
import {translations} from "../constants/translations";
import {makeStyles} from "@material-ui/core";
import {useLanguageContext} from "../contexts/LanguageContext";

const useStyles = makeStyles(theme => ({
    option: {
        margin: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    }
}));

export const LanguageSelector = (props) => {
    const languages = ["Polski", "English"];
    const {setLanguage} = useLanguageContext();
    const classes = useStyles();

    return <div className={props.className}>
        {Object.keys(translations).map((lang, index) =>
            <span className={classes.option} key={index} onClick={() => setLanguage(lang)}>{languages[index]}</span>)}
    </div>
};
