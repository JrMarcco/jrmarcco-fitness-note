import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/index';
import Login from './routes/Login/index';
import Index from './routes/Index/index';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/'} component={Index}/>
                <Route path={'/login'} component={Login}/>
                <PrivateRoute path={'/note/index'}/>
            </Switch>
        );
    }
}

export default App;
