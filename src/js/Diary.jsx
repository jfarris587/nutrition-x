import React from "react";
import Entry from "./components/Entry.jsx";
import Add from "./components/Add.jsx";

const Diary = (props) => {
  var food = props.diary[props.selectedCategory].food;
  return (
    <div className="diary">
      <div className="entries">
        <Add />

        {food.map((f, index) => (
          <Entry
            key = {index}
            index = {index}
            name = {f.name}
            cal = {f.cal}
            carb = {f.carb}
            fat = {f.fat}
            protein = {f.protein}
            selectedCategory = {props.selectedCategory}
            selectEntry = {props.selectEntry}
          />
        ))}
      </div>

      <div className="totals">
        <div className="entry total">
          <div className="entry-detail name">Totals</div>
          <div className="entry-detail protein">{props.diary[props.selectedCategory].protein}</div>
          <div className="entry-detail fat">{props.diary[props.selectedCategory].fat}</div>
          <div className="entry-detail carb">{props.diary[props.selectedCategory].carb}</div>
          <div className="entry-detail cal">{props.diary[props.selectedCategory].cal}</div>
        </div>

        <div className="entry daily">
          <div className="entry-detail name">Daily</div>
          <div className="entry-detail protein">{props.diary.total.protein}</div>
          <div className="entry-detail fat">{props.diary.total.fat}</div>
          <div className="entry-detail carb">{props.diary.total.carb}</div>
          <div className="entry-detail cal">{props.diary.total.cal}</div>
        </div>
      </div>

      <div className="remaining">
        <div className="entry">
            <div className="entry-detail name">Remaining</div>
            <div className="entry-detail protein">{props.diary.goals.protein - props.diary.total.protein}</div>

            <div className="entry-detail fat">{props.diary.goals.fat - props.diary.total.fat}</div>

            <div className="entry-detail carb">{props.diary.goals.carb - props.diary.total.carb}</div>

            <div className="entry-detail cal">{props.diary.goals.cal - props.diary.total.cal}</div>

        </div>
      </div>
    </div>
  );
}


export default Diary;
