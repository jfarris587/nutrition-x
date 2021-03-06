import React from "react";

const Entry = (props) => {
  return (
    <div className="entry" onClick={() => props.selectEntry(props.selectedCategory, props.index)}>
      <div className="entry-detail name">{props.name}</div>
      <div className="entry-detail protein"><span className="icon"></span>{props.protein}</div>
      <div className="entry-detail fat"><span className="icon"></span>{props.fat}</div>
      <div className="entry-detail carb"><span className="icon"></span>{props.carb}</div>
      <div className="entry-detail cal">{props.cal}</div>
    </div>
  );
}


export default Entry;
