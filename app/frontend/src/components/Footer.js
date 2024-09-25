import React from 'react';
import {makeStyles} from "@material-ui/core";
import {LanguageSelector} from "./LanguageSelector";
import {useLanguageContext} from "../contexts/LanguageContext";

const useStyles = makeStyles(theme => ({
    footer: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "40px",
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#292c2f',
        color: '#fff',
        flex: 'auto',
        '& > *': {
            flex: 1,
            margin: '16px'
        }
    },
    languageSelector: {
        textAlign: 'center'
    },
    company: {
        color: '#8f9296',
        display: 'block',
    },
    contact: {
        color: '#8f9296',
        textAlign: 'right',
        '& a': {
            textDecoration: 'none',
            color: '#8f9296',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    }
}));

export const Footer = (props) => {
    const classes = useStyles();
    const {t} = useLanguageContext();

    return <footer className={classes.footer}>
        <p className={classes.company}>Stowarzyszenie Studentów BEST AGH Kraków © 2024</p>
        <LanguageSelector className={classes.languageSelector}/>
        <p className={classes.contact}>{t("CONTACT")}: <a href={'mailto:itp@best.krakow.pl'}>itp@best.krakow.pl</a></p>
    </footer>
};