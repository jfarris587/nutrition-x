import React from "react";
import Entry from "./components/Entry.jsx";

const Diary = (props) => {
  return (
    <div className="diary">
      <div className="entries">
        <Entry />
        <Entry />
        <Entry />
        <Entry />
      </div>

      <div className="totals">
        <Entry />
        <Entry />
      </div>

      <div className="remaining">
        <Entry />
      </div>
    </div>
  );
}


export default Diary;
