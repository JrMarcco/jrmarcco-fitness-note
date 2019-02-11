import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './routes/Login/index';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={'/login'} component={Login}/>
            </Switch>
        );
    }
}

export default App;
