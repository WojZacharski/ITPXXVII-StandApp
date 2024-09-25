import React from 'react';
import {makeStyles} from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30vh'
    },
    dangerIcon: {
        fontSize: '64px',
        marginRight: '12px',
        color: '#B00020'
    },
}));


export const WrongTokenPage = () => {
    const classes = useStyles();
    return <div className={classes.container}>
        <ErrorIcon className={classes.dangerIcon}/>
        <div>
            <h2>Opps! Your URL is not valid!</h2>
            <p>Check your URL ones again, if you are sure it's correct, <a href='mailto:itp@best.krakow.pl'>contact
                us!</a></p>
        </div>
    </div>;
};
