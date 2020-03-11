import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retriveMessage = this.retriveMessage.bind(this)
    }
    render(){
    return (
    <>
        <h1>Welcome!</h1>
        <div className = "container">Welcome {this.props.match.params.name}. Goto <Link to ="/todo">Todo List</Link></div>
        <div className = "container"> <button onClick = {this.retriveMessage} className = "btn btn-success">Customized message</button></div>
    </>
    )
    }
    retriveMessage(){
        console.log('retrive message');
    } 
}

export default WelcomeComponent