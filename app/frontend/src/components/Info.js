import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import {useLanguageContext} from "../contexts/LanguageContext";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'flex',
        alignItems: 'center'
    },
    infoIcon: {
        color: '#1565c0',
        fontSize: '32px',
        marginRight: '6px'
    }
}));

export const Info = ({saved}) => {
    const {t} = useLanguageContext();
    const classes = useStyles();
    const info = saved
        ? t("CHANGE_INFO")
        : t('INFO');

    return <div className={classes.inline}>
        <InfoIcon className={classes.infoIcon}/>
        <p>{info}</p>
    </div>;
};
