import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state={
    name:"suresh",
    age:25
  }
  dataChange1=(newName,newAge)=>{
    this.setState({
      name:newName,
      age:newAge
     
    })
  }
  
  binding=(event)=>{
    this.setState({
      name:event.target.value
    
    })
  }
  binding1=(event)=>{
    this.setState({
      
      age:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <br/>
       <button onClick={()=>this.dataChange1('hello india',45)}>DataChangeButton</button>
       <h1>{this.state.name}</h1>
       <button onClick={this.dataChange1.bind(this,'hello worlds',44)}>Enter Some thing</button>
       <br/>
      
       <input type="text"  onChange={this.binding} value={this.state.name}/>
       <input type="text"  onChange={this.binding1} value={this.state.age}/>

      </div>
    );
  }
}

export default App;
