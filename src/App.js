import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import Working, { Okay }  from './components/learning/Working'
import Counter from './components/counter/CounterComponent'
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render(){
  return (
    <div className="App">
     {/*<Counter/>*/} 
     <TodoApp/>
    </div>
  );
  }
}

class LearningComponents extends Component {
  render(){
  return (
    <div className="LearnigComponents">
      Just checking ...
      <Working/>
      <Okay/>
      
    </div>
  );
  }
}




export default App;
