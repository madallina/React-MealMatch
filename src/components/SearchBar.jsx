import React, {useState} from 'react';

const SearchBar = ({onSearch})=>{
    const [ingredient, setIngredient]= useState("");
    const handleSearch = ()=>{
        if(ingredient){
            onSearch(ingredient);
            setIngredient("");
        }
    };
    return(
        <>
        <div className='search-bar'>
            <input 
            type="text"
            placeholder='Enter ingredient'
            value={ingredient}
            onChange={(e)=>setIngredient(e.target.value)}
            />
            <button id="search-btn" onClick={handleSearch}>
                Search
            </button>

        </div>
        </>
    )
}
export default SearchBar;