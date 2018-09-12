import React, { Component } from 'react';
import Menu from "./Menu.jsx"
import Summary from "./Summary.jsx"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: null,
      diary:{
        breakfast:[null],
        lunch:[null],
        dinner:[null],
        snacks:[null]
      }
    };
  }



  render() {
    if(this.state == null){
      return null;
    }
    else{
      return (
        <React.Fragment>
          <Menu />
          <Summary />
        </React.Fragment>
      );
    }

  }
}

export default App;
