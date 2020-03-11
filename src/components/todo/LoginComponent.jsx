import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'


class LoginComponents extends Component{
    constructor(props){
        super(props)

        this.state = {
            username : "hari",
            password : "",
            showSuccessMessage : false,
            hasLoginFailed : false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState({username : event.target.value})
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({password : event.target.value})  
    // }

    handleChange(event){
        console.log(event.target.name)
        this.setState({[event.target.name] : event.target.value})  
    }

    loginClick(event){
        if (this.state.username === "hari" && this.state.password === "baskar"){
            AuthenticationService.registerSucessfulRegistration(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({showSuccessMessage : true})
            // this.setState({hasLoginFailed : false})
        }
        else{
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }
    }

    render(){
        return(
            <>
                <header>Login</header>
                <div className  = "container">
                {/*<ShowMessage hasLoginFailed = {this.state.hasLoginFailed}></ShowMessage>*/}
                { this.state.hasLoginFailed && <div  className  = "alert alert-warning">Login Failed</div>}
                {/* this.state.showSuccessMessage && <div>Login Successful</div>*/}
            User Name : <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
            Password : <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
            <button className = "btn btn-primary"onClick = {this.loginClick}>Login</button>
            </div>
            </>
        )
    }
}

export default LoginComponents