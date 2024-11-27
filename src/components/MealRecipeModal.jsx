import "./MealRecipeModal.css";

const MealRecipeModal = ({ mealDetails, onClose }) => {
  if (!mealDetails) return null;

  return (
    <div className="modal__container">
      <header className="modal__header">
        <h2 className="modal__title">{mealDetails.strMeal}</h2>
        <button className="modal__close-button" onClick={onClose}>
          Close
        </button>
      </header>
      <div className="modal__content">
        <img
          className="modal__image"
          src={mealDetails.strMealThumb}
          alt={mealDetails.strMeal}
        />
        <p className="modal__instructions">{mealDetails.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealRecipeModal;
