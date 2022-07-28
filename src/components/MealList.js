import React from 'react'
import{useNavigate} from "react-router-dom"

function MealList({data}) {
    console.log(data)
    let moveTonext= useNavigate();
  return (
    <>
    {
        (!data)?"Not found": data.map(item=>{
            return(
                <div className='card'key={item.idMeal} onClick={()=>{moveTonext(`/${item.idMeal}`)}}>
                <img src={item.strMealThumb} alt=""></img>
                <h4>{item.strMeal}</h4>
            </div>
            )
        })
    }
  
    </>
  )
}

export default MealList
