import { useEffect, useState } from 'react'
import WineDisplay from './components/WineDisplay'
import Header from './components/Header';




const webpageStyle = {
  height: '100%',
  backgroundColor: "white",
  margin: "0 auto",
  maxWidth: "1200px",
  padding: "20px"
}
const searchStyle = {
  backgroundColor: "#F9F1F0",
  padding:'10px 10px 10px 10px',
  margin:'0',

}

function App() {

  const [form, setForm] = useState({
    type: 'chardonnay',
    maxPrice: 50,
    minRating: 0.8,

  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == 'type') {
      setForm({ ...form, type: value })
    }
    if (name == 'price') {
      setForm({ ...form, maxPrice: value })

    }
    if (name == 'rating') {
      setForm({ ...form, minRating: value })
    }
    console.log({ form });
  }

  const [chosen, setChosen] = useState([]);

  async function getRecommendation(e) {
    e.preventDefault();

    if (form.type == '' || form.maxPrice == '' || form.minRating == '') {
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
        setChosen(data.recommendedWines);
        // setForm({ data: data.recommendedWines[0]});
        // console.log(data);

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div style={webpageStyle}>
      <Header />
      <div style={searchStyle}>
        <form>
          <label>Wine Type&nbsp;</label>
          <input type='text' name='type' placeholder='Ex. Merlot' onChange={handleChange} />
          &nbsp; &nbsp; &nbsp;
          <label>Maximum Price&nbsp;</label>

          <input type='number' name='price' placeholder='$' onChange={handleChange} />
          &nbsp; &nbsp; &nbsp;
          <label>Rating&nbsp;</label>
          <input type='number' name='rating' min='0' max='1' step={.25} placeholder='0.8' onChange={handleChange} />
          &nbsp; &nbsp; &nbsp;
          <button onClick={getRecommendation}>Search</button>
        </form>
      </div>
      <WineDisplay wine={chosen} />
    </div>
  )
}






export default App
