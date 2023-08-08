import React, { useEffect, useState } from 'react'

function Wine() {
   
    const [wine, setWine] = useState({});

    const handleClick = ()=>{
    }


   
    useEffect(() => {
        fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/recommendation?wine=merlot&maxPrice=25&minRating=0.7&number=3', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            },
        }).then((response) => response.json()).then((data) => {
            console.log(data.recommendedWines)
        })
            .catch((error) => { console.log(error) });

    }, []);

    // console.log({wine});

    return (
        <div>Wine Recommendation
            <br />
            <button type='submit' onClick={handleClick}>Search</button>

        </div>
    )
}

export default Wine