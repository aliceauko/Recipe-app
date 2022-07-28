import React from 'react'

function MealList({data}) {
    console.log(data)
  return (
    <>
    {
        (!data)?"Not found": data.map(item=>{
            return(
                <div className='card'>
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
