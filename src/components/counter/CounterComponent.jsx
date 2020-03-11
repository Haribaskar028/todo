import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

class Counter extends Component {
  constructor() {
    super();
    this.state={
        
        counter : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  render(){
    return (
      <div className="Counter">
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className = "Count" >{this.state.counter}</span>
      <div>
        <button className="Reset" onClick = {this.reset}>Reset</button>
      </div>
      </div>
    );
    }
  increment(by)  {
       console.log(`increment from parent-${by}`);
       this.setState(
        (beforeState) => {
           return {counter : beforeState.counter + by}
        }
       );
   }

   decrement(by)  {
    console.log(`increment from parent-${by}`);
    this.setState(
     (beforeState) => {
        return {counter : beforeState.counter - by}
     }
    );
}

   reset()  {
    //console.log(`increment from parent-${by}`);
    this.setState
     ({
         counter : 0 
     }
    );
}

}

class CounterButton extends Component {

    constructor() {
        super();
        // this.state={
            
        //     counter : 0
        // }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    render(){
    return (
      <div className="Counter">
        <button onClick = {() => this.props.incrementMethod(this.props.by)}
        //style = {{fontSize : "50px"}}
    >+{this.props.by}</button>
      { /* <span className = "Count">{this.state.counter}</span>*/}
      <button onClick = {() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
    </div>
    )
    }

  //   increment() {
  //      // console.log('increment');
  //       this.setState({
  //           counter : this.state.counter + this.props.by
            
  //       });

  //       this.props.incrementMethod(this.props.by);
  //   }

  //   decrement() {
  //     // console.log('increment');
  //      this.setState({
  //          counter : this.state.counter - this.props.by
           
  //      });

  //      this.props.decrementMethod(this.props.by);
  //  }
  }

  // class DecButton extends Component {

  //   constructor() {
  //       super();
  //       this.state={
            
  //           counter : 0
  //       }
  //       this.increment = this.increment.bind(this);
  //   }

  //   render(){
  //   return (
  //     <div className="Counter">
  //       Counter
  //       <button onClick = {this.increment}
  //       //style = {{fontSize : "50px"}}
  //   >{this.props.by}</button>
  //     { /* <span className = "Count">{this.state.counter}</span>*/}
  //     </div>
  //   )
  //   }

  //   increment() {
  //      // console.log('increment');
  //       this.setState({
  //           counter : this.state.counter + this.props.by
            
  //       });

  //       this.props.incrementMethod(this.props.by);
  //   }
  // }

  // class ResetButton extends Component {

  //   render(){
  //   return (
  //     <div className="Counter">
  //       <button onClick = {this.increment}
  //       //style = {{fontSize : "50px"}}
  //   >Reset</button>
  //     { /* <span className = "Count">{this.state.counter}</span>*/}
  //     </div>
  //   )
  //   }

  //   increment = () => {
  //      // console.log('increment');
  //       this.props.resetMethod();
  //   }
  // }

CounterButton.defaultProps = {
  by:1
}

CounterButton.propTypes = {
  by : PropTypes.number
}

export default Counter