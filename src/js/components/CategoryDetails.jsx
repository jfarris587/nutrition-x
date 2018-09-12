import React from "react";

const CategoryDetails = (props) => {
  var classes = "category";

  if(!props.selected){
    return null;
  }

  else{
    return (
      <div className="category-details">
        <div className="detail carb">{props.carb}</div>
        <div className="detail fat">{props.fat}</div>
        <div className="detail protein">{props.protein}</div>
      </div>
    );
  }
}


export default CategoryDetails;
