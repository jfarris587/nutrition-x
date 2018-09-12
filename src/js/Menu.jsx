import React from "react";
import Category from "./components/Category.jsx"

const Menu = (props) => {
  return (
    <section className="menu">
      <div className="add-category">add another category</div>

      <div className="categories">
        <Category
          selected={false}
          heading={"Heading Here"}
          info={"Informatio here"}
          text={"more text goes here"}
          nutrition={null}
        />

        <Category
          selected={true}
          heading={"Heading Here"}
          info={"Informatio here"}
          text={"more text goes here"}
          nutrition={null}

        />

        <Category
          selected={false}
          heading={"Heading Here"}
          info={"Informatio here"}
          text={"more text goes here"}
          nutrition={null}
        />

        <Category
          selected={false}
          heading={"Heading Here"}
          info={"Informatio here"}
          text={"more text goes here"}
          nutrition={null}
        />

      </div>
    </section>
  );
}


export default Menu;
