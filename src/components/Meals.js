import React,{useEffect, useState} from "react";
import MealList from "./MealList";
import Recipe from "./Recipe";


function Meals() {
const[baseurl, setBaseurl]= useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
const [item, setItem]= useState();
const[show, setShow]=useState(false)

useEffect(()=>{
  fetch(baseurl)
  .then(response=>response.json())
  .then(data=>{
    console.log(data.meals);
    setItem(data.meals)
    setShow(true);
  })

},[baseurl])
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
        <div className="indexHolder">
          <Recipe />
        </div>
        <div className="contain">
          
         {show? <MealList data={item} />:"Not found" }
        </div>
       
      </div>
    </>
  );
}

export default Meals;
