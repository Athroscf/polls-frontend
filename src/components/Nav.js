import React, { Component } from 'react';
import Inicio from './Inicio';
import CrearEncuesta from './CrearEncuesta';
import Login from './Login';
import Register from './Register';
import Polls from './Polls';
import PollDetails from './PollDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';

export class Nav extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title='Web para Encuestas' position='static'>
                            <Toolbar>
                                Web de Encuestas
                            </Toolbar>
                        </AppBar>
                        <br/><br/>
                        <div>
                            <Switch>
                                    <Route path="/" exact component={ Inicio }/>
                                    <Route path="/login" component={ Login }/>
                                    <Route path="/registro" component={ Register }/>
                                    <Route path="/crearEncuesta" component={ CrearEncuesta }/>
                                    <Route path="/encuestas" component={ Polls }/>
                                    <Route path="/pollDetails" component={ PollDetails }/>
                            </Switch>
                        </div>
                    </React.Fragment>
                </MuiThemeProvider>
            </Router>
        )
    }
}

export default Nav
