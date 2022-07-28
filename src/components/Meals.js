import React from "react";
import MealList from "./MealList";

function Meals() {
  return (
    <>
      <div className="meals">
        <div className="header">
          <h1>Search for food recipe</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            dolorem omnis quae consectetur saepe velit vitae, delectus corporis,
            accusamus iste numquam quisquam quos? Quae suscipit dignissimos
            veniam optio, aliquid ipsa?
          </h4>
        </div>

        <div className="search">
          <input type="text" className="searchbox"></input>
        </div>
        <div className="contain">
          <MealList/>
          <MealList/>
          <MealList/>
          <MealList/>
          <MealList/>
          <MealList/>

        </div>
      </div>
    </>
  );
}

export default Meals;
