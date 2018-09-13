import React from "react";
import Category from "./components/Category.jsx"

const Menu = (props) => {
  return (
    <section className="menu">
      <div className="add-category">nutrition x</div>

      <div className="categories">
        <Category
          selected={false}
          heading={"Breakfast"}
          info={"Informatio here"}
          text={"more text goes here"}
          nutrition={null}  />

        <Category
          selected={true}
          heading={"Lunch"}
          info={"Informatio here"}
          text={"more text goes here"}
          nutrition={null}  />

        <Category
          selected={false}
          heading={"Dinner"}
          info={"Informatio here"}
          text={"more text goes here"}
          nutrition={null} />

        <Category
          selected={false}
          heading={"Snack"}
          info={"Informatio here"}
          text={"more text goes here"}
          nutrition={null}  />

      </div>
    </section>
  );
}


export default Menu;
