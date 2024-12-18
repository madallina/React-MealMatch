import React from 'react';
import MealItem from './MealItem';

const MealList= ({meals,onMealClick})=>{
return(
    <div  className='meal-list'>
        {meals.length > 0 ?(
            meals.map((meal)=>(
                <MealItem key={meal.idMeal} meal={meal} onClick={onMealClick} />
            ))
        )  : (
            <p>Sorry , no meals found</p>
        )}

    </div>
);
};

export default MealList;