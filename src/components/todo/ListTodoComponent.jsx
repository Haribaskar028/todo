import React, { Component } from "react";

class ListTodoComponents extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [
                {id : 1 , description : "react" , done : false , date : new Date()},
                {id : 2 , description : "Dance" , done : false , date : new Date()},
                {id : 3 , description : "Flute" , done : false , date : new Date()}
            ]
        }
    }
    render(){
    return (
        <div>
            <h1>Todo App</h1>
            <div className = "container">
            <table className = "table">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Description </th>
                        <th> Is completed ? </th>
                        <th> Target Date </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map (
                            todo =>
                        <tr>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.date.toString()}</td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}

export default ListTodoComponents