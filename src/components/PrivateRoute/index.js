import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {authenticated} from '../../util/authUtils';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        !!authenticated() ?
            <Component {...props}/>
            :
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}/>
);

export default PrivateRoute;
