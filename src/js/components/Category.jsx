import React from "react";
import CategoryDetails from "./CategoryDetails.jsx";

const Category = (props) => {
  var classes = "category";

  if(props.selected){
    classes += " selected";
  }

  return (
    <div className={classes} onClick={() => props.selectCategory(props.heading)}>
      <CategoryDetails
        selected = {props.selected}
        category = {props.heading}
        diary = {props.diary}
      />

      <div className="category-text">
        <div className="wrapper">
          <h2>{props.heading}</h2>
          <p className="info">{calculateCal(props.diary[props.heading.toLowerCase()]) + " calories"}</p>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

const calculateCal = (c, m) =>{
  var total = 0;

  c.food.forEach(function(obj){
   total += obj.cal;
 });

 return total;
}



export default Category;
