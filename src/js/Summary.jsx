import React from "react";
import Diary from "./Diary.jsx";

const Summary = (props) => {
  return (
    <section className="summary">
      <div className="title">
        <h1>
          DAILY FOOD TRACKER
          <span>Wednesday, 12 August</span>
        </h1>
      </div>

      <div className="navigation">
        <button class="button trash"><i class="fas fa-trash-alt"></i></button>
        <button class="button">Testing</button>
        <button class="button">Click Me</button>

        <button class="button add"><i class="fas fa-plus"></i></button>
      </div>

      <Diary />
    </section>
  );
}


export default Summary;
