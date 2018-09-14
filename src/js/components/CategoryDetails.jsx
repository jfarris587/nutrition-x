import React from "react";

const CategoryDetails = (props) => {
  var classes = "category";

  if(!props.selected){
    return null;
  }

  else{
    return (
      <div className="category-details">
        <div className="detail carb">{calculateMacro(props.diary[props.category.toLowerCase()], "carb")}</div>
        <div className="detail fat">{calculateMacro(props.diary[props.category.toLowerCase()], "fat")}</div>
        <div className="detail protein">{calculateMacro(props.diary[props.category.toLowerCase()], "protein")}</div>
      </div>
    );
  }
}

const calculateMacro = (c, m) =>{
  var total = 0;

  c.food.forEach(function(obj){
   total += obj[m];
 });

 return total;
}


export default CategoryDetails;
