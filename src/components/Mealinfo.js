import React, { useState } from "react";
import { useParams } from "react-router-dom";

let vid = "";

function Mealinfo() {
  const [items, setItems] = useState();
  const { MealId } = useParams();
  if (MealId != "") {
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.meals[0]);
      });
  }

  if (items) {
    const url = items.strYoutube;
    const strurl = url.split("=");
    vid = strurl[strurl.length - 1];
  }
  return (
    <>
      {!items ? (
        ""
      ) : (
        <>
          <div className="details">
            <img src={items.strMealThumb} alt=""></img>
            <div className="inner-details">
              <h1>{items.strMeal}</h1>
              <h2>{items.strArea} Food</h2>
              <h3>Category: {items.strCategory}</h3>
            </div>
          </div>
          <div className="res-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <h4>
                {items.strIngredient1}:{items.strMeasure1}
              </h4>
              <h4>
                {items.strIngredient2}:{items.strMeasure2}
              </h4>
              <h4>
                {items.strIngredient3}:{items.strMeasure3}
              </h4>
              <h4>
                {items.strIngredient4}:{items.strMeasure4}
              </h4>
              <h4>
                {items.strIngredient5}:{items.strMeasure5}
              </h4>
              <h4>
                {items.strIngredient6}:{items.strMeasure6}
              </h4>
              <h4>
                {items.strIngredient7}:{items.strMeasure7}
              </h4>
              <h4>
                {items.strIngredient8}:{items.strMeasure8}
              </h4>
            </div>
            <div className="recipeInstructions">
              <h2>Instructions</h2> <br />
              <h4>{items.strInstructions}</h4>
            </div>
          </div>
          <div className="video">
            <iframe src={`https://www.youtube.com/embed/${vid}`}></iframe>
          </div>
        </>
      )}
    </>
  );
}

export default Mealinfo;
