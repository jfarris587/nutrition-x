import React from "react";
import Diary from "./Diary.jsx";

const Summary = (props) => {
  var toggled = "";

  if(props.toggled === true){
    toggled = "toggled";
  }


  return (
    <section className={"summary " + toggled}>
      <div className={"menu-toggler " + toggled} onClick={props.toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="title">
        <h1>
          DAILY FOOD TRACKER
          <span>Wednesday, 12 August</span>
        </h1>
      </div>

      <div className="navigation">
        <button className="button trash" onClick={props.deleteEntry}><i className="fas fa-trash-alt"></i></button>
        <button className="button add" onClick={()=>{props.addFood(props.selectedCategory)}}><i className="fas fa-plus"></i></button>
      </div>

      <Diary
        diary = {props.diary}
        selectedCategory = {props.selectedCategory}
        selectEntry = {props.selectEntry}

      />
    </section>
  );
}


export default Summary;
