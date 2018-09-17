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

  componentWillMount(){
    if(window.innerWidth < 12000){
      let tempState = this.state;
      tempState.toggled = false;
      this.setState(tempState);
    }

    this.calculateTotals("breakfast");
    this.calculateTotals("lunch");
    this.calculateTotals("dinner");
    this.calculateTotals("snack");
  }

  componentDidMount(){
    window.addEventListener("resize", this.updateDimension);
  }

  calculateTotals = (category) => {
    console.log("CALULATING FOOD");

    var tempState = this.state;
    var c = tempState.diary[category];
    var cal = 0;
    var carb = 0;
    var fat = 0;
    var protein = 0;

    for(let i = 0; i < c.food.length; i++){
        let food = c.food[i];
        cal += food.cal;
        carb += food.carb;
        fat += food.fat;
        protein += food.protein;
    }

    c.cal = cal;
    c.carb = carb;
    c.fat = fat;
    c.protein = protein;

    var d = tempState.diary;
    d.total.cal = d.breakfast.cal + d.lunch.cal + d.dinner.cal + d.snack.cal;
    d.total.carb = d.breakfast.carb + d.lunch.carb + d.dinner.carb + d.snack.carb;
    d.total.fat = d.breakfast.fat + d.lunch.fat + d.dinner.fat + d.snack.fat;
    d.total.protein = d.breakfast.protein + d.lunch.protein + d.dinner.protein + d.snack.protein;

    this.setState(tempState);
  }

  addFood = (category) => {
    var f = document.getElementsByClassName("addition")[0];
    var name = f.name.value;
    var cal = parseInt(f.cal.value);
    var fat = parseInt(f.fat.value);
    var carb = parseInt(f.carb.value);
    var protein = parseInt(f.protein.value);

    if(name === "" || cal === "" || carb === "" || fat === "" || protein === ""){
      alert("Fill out all fields");
      return;
    }

    var obj = {
  		name: name,
  		cal: cal,
  		carb: carb,
  		fat: fat,
  		protein: protein
  	};

    var tempState = this.state;
    console.log("ADDING FOOD");

    tempState.diary[category].food.push(obj);
    this.setState(tempState);
    console.log(tempState);
    this.calculateTotals(category);
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
            addFood = {this.addFood}
          />
        </React.Fragment>
      );
    }

  }
}

export default App;
