import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import {Button} from "@material-ui/core";

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/dashboard' } };

    const handleClick = async e => {
        e.preventDefault();
        localStorage.setItem('token', 'logged-in');
        history.replace(from);
    };

    return (
        <div className="Login">
            <header className="Login-header">
                This is the Login Page <br/><br/>
                <Button color="inherit" variant="outlined" onClick={handleClick}>
                    Login
                </Button>
            </header>
        </div>
    );
}

export default LoginPage;
