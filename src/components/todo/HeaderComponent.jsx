import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLogged();
        console.log(isUserLoggedIn);
    return (       
        <header>
            <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href = "/login" className = "navbar-barnd">TodoApp</a></div>
           
            <ul className = "navbar-nav">
                {isUserLoggedIn  && <li><Link className = "nav-link" to="/welocme/hari">Home</Link></li>}
                {isUserLoggedIn  && <li><Link className = "nav-link" to="/todo">Todo</Link></li>}
            </ul>
            <ul className = "navbar-nav navbar-collapse justify-content-end">
                {!isUserLoggedIn  && <li><Link className = "nav-link" to="/login">Login</Link></li>}
                {isUserLoggedIn  && <li><Link className = "nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            </ul>
            </nav>
        </header>
        )
    }
}

export default HeaderComponent