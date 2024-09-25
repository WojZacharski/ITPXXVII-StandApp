import React from 'react';
import {Header} from "./Header";
import {Actions} from "./Actions";
import {StandMap} from "./StandMap";
import {makeStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    container: {
        '@media (min-width: 1600px)': {
            zoom: '120%'
        },
        margin: 'auto',
    }
}));

export const MainPage = () => {
    const classes = useStyles();

    return <Container className={classes.container}>
            <Header/>
            <StandMap/>
            <Actions/>
        </Container>
};
