import './App.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import MealList from "./components/MealList";
import MealRecipeModal from "./components/MealRecipeModal";


function App() {
const [meals,setMeals]= useState([]);
const [mealsDetails, setMealDetails]= useState(null);
const [error, setError] = useState('');

const getMealList = async(ingredient) =>{
  try{
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    if(data.meals){
      setMeals(data.meals);
      setError("");
    } else {
      setMeals([]);
      setError("Sorry, we didn't find any meal!")
    }
  } catch(error){
    console.error('Error fetching meals:', error);
    setMeals([]);
    setError("Sorry , something went wrong!");
  }
};

const getMealRecipe = async(id)=>{
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    setMealDetails(data.meals[0]);
  } catch (error){
    console.error("Error fetching meal recipe:", error);

  }
  
};
  return (
    <>
    <h1>Meal Match</h1>
    <SearchBar onSearch={getMealList} />
    
    </>
  )
}

export default App
