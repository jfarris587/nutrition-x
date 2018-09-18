import React from "react";
import Category from "./components/Category.jsx"

const Menu = (props) => {
  var categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
  var toggled = "";

  if(props.toggled === true){
    toggled = "toggled";
  }

  return (
    <section className={"menu " + toggled}>
      <div className="add-category">nutrition x</div>

      <div className="categories">
        {categories.map((category, index) => (
          <Category
            key = {index}
            selected = {index === categories.indexOf(props.selected)}
            heading = {categories[index]}
            info = {"Information here"}
            text = {"more text goes here"}
            diary = {props.diary}
            selectCategory = {props.selectCategory}
            selectEntry = {props.selectEntry}
          />
        ))}
      </div>
    </section>
  );
}


export default Menu;
