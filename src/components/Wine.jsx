import React, { useEffect, useState } from 'react'

function Wine() {
    const [ wine, setWine ] = useState({});

    useEffect(()=>{
        fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/recommendation?wine=merlot&maxPrice=50&minRating=0.7&number=5', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dec231d596msh4e57b237969f0c4p1b8712jsn6ca5e3848dfd',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        })
        .catch((error) => console.log(error));


    },[]);

    return (
        <div>Wine</div>
    )
}

export default Wine