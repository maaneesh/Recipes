
import React, { useState, useEffect } from "react";


function Joke() {
    const [joke, setJoke] = useState(null);
    useEffect(() => {
        fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': 'dec231d596msh4e57b237969f0c4p1b8712jsn6ca5e3848dfd',
		        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setJoke(data[0].joke);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div>
            <h2>Joke of the day:</h2>
            {joke && <p>{joke}</p>}
        </div>
    );
}
export default Joke;