import { useEffect, useState } from 'react'
import WineDisplay from './components/WineDisplay'

function App() {

  const [form, setForm] = useState({
    type: 'chardonnay',
    maxPrice: 15,
    minRating: 0.3,

  });

  const handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    if ( name == 'type'){
      setForm({...form, type: value})
    }
    if ( name == 'price'){
      setForm({...form, maxPrice: value})
     
    }
    if ( name == 'rating'){
      setForm({...form, minRating: value})
    }

    console.log({ form });
  }


  async function getRecommendation(e){

    e.preventDefault();


    useEffect(() => {
      fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/recommendation?wine=${form.type}&maxPrice=${form.maxPrice}&minRating=${form.minRating}&number=3`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setForm({ data: data.recommendedWines[0] });
        })
        .catch((error) => { console.log(error) });
  
    }, []);
  }




    return (
      <>
        <form>
          <input type='text' name='type' placeholder='Wine Type' onChange={handleChange} />
          &nbsp; &nbsp; &nbsp;
          <input type='text' name='price' placeholder='Max Price' onChange={handleChange}/>
          &nbsp; &nbsp; &nbsp;
          <input type='text' name='rating' placeholder='Rating' onChange={handleChange}/>
          &nbsp; &nbsp; &nbsp;
          <button  onClick={getRecommendation}>Submit</button>
        </form>
  
      </>
    )
  }
 





export default App
