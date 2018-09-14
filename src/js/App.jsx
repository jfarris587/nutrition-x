import React, { Component } from 'react';
import Menu from "./Menu.jsx"
import Summary from "./Summary.jsx"
import Settings from '../settings.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: null,
      diary: Settings,
      selected:"Lunch",
      toggled: true
    };
  }

  componentDidMount(){
    window.addEventListener("resize", this.updateDimension);
  }

  updateDimension = () =>{
    var w = window.innerWidth;
    if(w < 1200){
      var tempState = this.state;
      tempState.toggled = false;
      this.setState(tempState);
    }
  }

  selectCategory = (c) => {
    var tempState = this.state;
    tempState.selected = c;
    this.setState(tempState);
  }

  toggleMenu = () => {
    var tempState = this.state;
    tempState.toggled = !tempState.toggled;
    this.setState(tempState);
  }

  render() {
    if(this.state == null){
      return null;
    }
    else{
      return (
        <React.Fragment>
          <Menu
            diary = {this.state.diary}
            selected = {this.state.selected}
            selectCategory = {this.selectCategory}
            toggled = {this.state.toggled}
          />
          <Summary
            toggleMenu = {this.toggleMenu}
            toggled = {this.state.toggled}
            diary = {this.state.diary}
            selectedCategory = {this.state.selected.toLowerCase()}
          />
        </React.Fragment>
      );
    }

  }
}

export default App;
