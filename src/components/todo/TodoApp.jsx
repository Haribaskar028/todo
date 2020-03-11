import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponents from './LoginComponent.jsx'
import ListTodoComponents from './ListTodoComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'

class TodoApp extends Component {
    render(){
        return(
           <div className = "TodoApp">
               <>
                <Router>
                   <HeaderComponent/>
                   <Switch>
                   <Route path="/" exact component = {LoginComponents}/>
                   <Route path="/login" component = {LoginComponents}></Route>
                   <AuthenticatedRoute path="/welcome/:name" component = {WelcomeComponent}/>
                   <AuthenticatedRoute path="/todo" component = {ListTodoComponents}/>
                   <AuthenticatedRoute path="/logout" component = {LogoutComponent}/>
                   <Route component = {ErrorComponent}></Route>
                   </Switch>
                   <FooterComponent/>
                   </Router>               
               </>
               {/*<LoginComponents />
               <WelcomeComponent></WelcomeComponent>*/}
           </div> 
        )
        }
    ;
}

function ShowMessage(props){

    if(props.hasLoginFailed){
        return <div>Invalid credentials </div>
    }
    else
    return <div>Login Sucessful </div>    

}

export default TodoApp;