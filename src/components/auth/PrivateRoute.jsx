import React from 'react'
import { Route } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
    const auth = useSelector((state) => state.firebase.auth);
    return (
        <Route
            {...rest}
            render={() =>
                isLoaded(auth) && !isEmpty(auth) ? children : <div>Loading</div>}
        />

    );
};


export default PrivateRoute;