import React from "react";
import CategoryDetails from "./CategoryDetails.jsx";

const Category = (props) => {
  var classes = "category";

  if(props.selected){
    console.log("HERED");
    classes += " selected";
  }

  return (
    <div className={classes}>
      <CategoryDetails
        selected={props.selected}
        carb={125.6}
        fat={23.8}
        protein={54.3}
      />

      <div className="category-text">
        <div className="wrapper">
          <h2>{props.heading}</h2>
          <p className="info">{props.info}</p>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}


export default Category;
