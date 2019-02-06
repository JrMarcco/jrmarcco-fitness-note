import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Loading from './components/Loadling';

class App extends React.Component {
    render() {
        return (
            <div className={'App'}>
                <Loading />
            </div>
        );
    }
}

export default App;
