import React from "react";
import Entry from "./components/Entry.jsx";

const Diary = (props) => {
  var food = props.diary[props.selectedCategory].food;
  return (
    <div className="diary">
      <div className="entries">
        {food.map((f, index) => (
          <Entry
            key = {index}
            name = {f.name}
            cal = {f.cal}
            carb = {f.carb}
            fat = {f.fat}
            protein = {f.protein}
          />
        ))}
      </div>

      <div className="totals">
        <div className="entry total">
          <div className="entry-detail check"></div>
          <div className="entry-detail name">Totals</div>
          <div className="entry-detail protein">{calculateTotals(food, "protein")}</div>
          <div className="entry-detail fat">{calculateTotals(food, "fat")}</div>
          <div className="entry-detail carb">{calculateTotals(food, "carb")}</div>
          <div className="entry-detail cal">{calculateTotals(food, "cal")}</div>
        </div>

        <div className="entry daily">
          <div className="entry-detail check"></div>
          <div className="entry-detail name">Your daily total</div>
          <div className="entry-detail protein">{calculateDailyTotals(props.diary, "protein")}</div>
          <div className="entry-detail fat">{calculateDailyTotals(props.diary, "fat")}</div>
          <div className="entry-detail carb">{calculateDailyTotals(props.diary, "carb")}</div>
          <div className="entry-detail cal">{calculateDailyTotals(props.diary, "cal")}</div>
        </div>
      </div>

      <div className="remaining">
        <div className="entry">
          <div className="entry-detail check"></div>
            <div className="entry-detail name">Remaining</div>
            <div className="entry-detail protein">{calculateRemaining(props.diary, "protein")}</div>
            <div className="entry-detail fat">{calculateRemaining(props.diary, "fat")}</div>
            <div className="entry-detail carb">{calculateRemaining(props.diary, "carb")}</div>
            <div className="entry-detail cal">{calculateRemaining(props.diary, "cal")}</div>
        </div>
      </div>
    </div>
  );
}

const calculateTotals = (food, macro) =>{
  var total = 0;

  food.forEach(function(obj){
   total += obj[macro];
  });

 return total;
}

const calculateDailyTotals = (diary, macro) =>{
  var total = calculateTotals(diary.breakfast.food, macro)
  + calculateTotals(diary.lunch.food, macro)
  + calculateTotals(diary.dinner.food, macro)
  + calculateTotals(diary.snack.food, macro);

 return total;
}

const calculateRemaining = (diary, macro) =>{
  var total = diary.goals[macro] - calculateDailyTotals(diary, macro);

  if(total < 0){
    total = 0;
  }

 return total;
}

export default Diary;
