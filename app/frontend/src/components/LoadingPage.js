import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30vh'
    },
    infoIcon: {
        fontSize: '64px',
        marginRight: '12px',
        color: '#1565c0'
    },
}));

export const LoadingPage = () => {
    const classes = useStyles();

    return <div className={classes.container}>
        <InfoIcon className={classes.infoIcon}/>
        <h1>Page is loading...</h1>
    </div>;
};