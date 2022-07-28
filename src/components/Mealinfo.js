import React, { useState } from 'react'
import {useParams} from 'react-router-dom';


function Mealinfo() {
    const[items, setItems]=useState();
    const {MealId} = useParams();
    if(MealId!=""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(response=>response.json())
        .then(data=>{
            setItems(data.meals[0]);
        })
    }
  return (
  <>
  {
    (!items)?"":(<>
    <div className='details'>
        <img src={items.strMealThumb} alt=""></img>
        <div className='inner-details'>
            <h1>{items.strMeal}</h1>
            <h2>{items.strArea}Food</h2>
        </div>

    </div>

    </>)
  }
 
  </>
  )
}

export default Mealinfo;
