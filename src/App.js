import React from 'react';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      input:'',
      name:'',
    }

    this.node = null
  }
  copy() {
    let copy = this.node.select();
    document.execCommand("copy");
  }
  clear() {
    this.setState({name:'', input:''})
  }
  updateDisplay(value){
    this.setState({name:btoa(value),input:value}, ()=>{
      this.copy();
    })
  }
  render() {
    const { name, input } = this.state

    return (
      <div className="App">
        <div className="body-style">
          <div><textarea style={{height:"100px", width:"300px"}} onChange={(e)=>{this.updateDisplay(e.target.value)}} value={input}/></div>
          <button onClick={(e)=>{this.clear()}} >Clear</button>
          <div><textarea style={{height:"100px", width:"300px"}} ref={(node)=>{this.node=node}} value={name}>{ name }</textarea></div>
          <button onClick={(e)=>{this.copy()}} >Copy</button>
        </div>
      </div>
    );
  }
}

export default App;