import React from "react";

const Add = (props) => {

  return (
    <form className="addition entry">
      <input className="add-detail name" type="text" autoComplete="off" placeholder="food" name="name"></input>
      <input className="add-detail cal" type="number" autoComplete="off" placeholder="calories" name="cal"></input>
      <input className="add-detail carb" type="number" autoComplete="off" placeholder="carb" name="carb"></input>
      <input className="add-detail fat" type="number" autoComplete="off" placeholder="fat" name="fat"></input>
      <input className="add-detail protein" type="number" autoComplete="off" placeholder="protein" name="protein"></input>

    </form>
  );
}


export default Add;
