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

  const [chosen, setChosen] =useState({});

  async function getRecommendation(e){
        e.preventDefault();

        if (form.type == '' || form.maxPrice =='' || form.minRating ==''){
          alert('add values');
        } else {
          try {
            const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/recommendation?wine=${form.type}&maxPrice=${form.maxPrice}&minRating=${form.minRating}&number=3`, {
                    method: 'GET',
                    headers: {
                      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                    },
                  })
                  const data = await response.json();
                  setChosen(data.recommendedWines[0]);
                  // setForm({ data: data.recommendedWines[0]});
                  // console.log(data);
            
          } catch (error) {
            console.log(error)
          }
        }
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

        <WineDisplay wine={chosen}/>
      </>
    )
  }
 





export default App
