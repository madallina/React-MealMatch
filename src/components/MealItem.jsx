
const MealItem = ({meal, onClick})=>{

return (
<div className="meal-tem" data-id={meal.idMeal} onClick={()=>onClick(meal.idMeal)}>
    <div className="meal-img">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

    </div>
    <div className="meal-name">
        <h3>{meal.strMeal}</h3>
        <button className="recipe-btn">Get recipe</button>

    </div>

</div>
);
};

export default MealItem ;