const MealItem = ({ meal, onClick }) => {
  return (
    <div
      className="meal-item"
      data-id={meal.idMeal}
      
    >
      <div className="meal-item__image">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="meal-item__details">
        <h3 className="meal-item__name">{meal.strMeal}</h3>
        <button 
        className="meal-item__button"
        onClick={() => onClick(meal.idMeal)}
        >Get recipe</button>
      </div>
    </div>
  );
};

export default MealItem;
