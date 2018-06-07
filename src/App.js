import React, { Component } from 'react';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count:  0
    };
    
  }

  increment = () => {
    this.setState({count: this.state.count + 1});

  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });

  }
  render(){
    return (
      <div>
      <div><button onClick={this.increment}>Increment</button>
      {this.state.count}
      </div>
      <button onClick={this.decrement}>decrement</button>
        
      </div>
  
    );

  }
}
export default App;

