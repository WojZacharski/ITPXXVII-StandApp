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
import { Map } from "./components/mapview/MapView";
import { Login } from "./components/mapview/Login";
import PrivateRoute from "./constants/routes";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const App = () => (
   <AuthProvider>
    <DataProvider>  
    <LanguageProvider>  
        <div className="App">
            <Router>
                <Switch>
                    <Route path={ROUTES.LOGIN} component={Login} />
                    <PrivateRoute path={ROUTES.ADMIN} component={Admin} />
                    <PrivateRoute path={ROUTES.MAP} component={Map} />                 
                    <Route path={ROUTES.LANDING} component={Component} />
                </Switch>
            </Router>
        </div>
        </LanguageProvider>
        </DataProvider>
</AuthProvider>
);

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