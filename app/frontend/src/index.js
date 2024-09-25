import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { DataProvider } from "./contexts/DataContext";
import { DeveloperProvider } from "./contexts/DeveloperContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { PageResolver } from "./components/PageResolver";
import { Footer } from "./components/Footer";
import { CssBaseline } from "@material-ui/core";
import { Admin } from "./components/admin/Admin";

const App = () =>
    <div className="App">
        <Router>
            <Switch>
                <Route path={ROUTES.ADMIN} component={Admin} />
                <Route path={ROUTES.LANDING} component={Component} />
            </Switch>
        </Router>
    </div>;

const Component = (props) => <DataProvider {...props}>
    <LanguageProvider>
        <DeveloperProvider>
            <CssBaseline />
            <PageResolver />
            <Footer />
        </DeveloperProvider>
    </LanguageProvider>
</DataProvider>;

ReactDOM.render(
    <App />
    , document.getElementById('root'));