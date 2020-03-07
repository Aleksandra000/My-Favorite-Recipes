import React from 'react';
import {
    NavLink
} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2> ERROR!!!</h2>
            <NavLink className="btnNav " to="/"> Return to Home Page</NavLink>
        </div>
    );
};

export default NotFound;