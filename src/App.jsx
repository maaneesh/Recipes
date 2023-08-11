import { useEffect, useState } from 'react'
import WineDisplay from './components/WineDisplay'
import Header from './components/Header';


const webpageStyle = {
  height: '100%',
  backgroundColor: "#606462",
  margin: "0 auto",
  maxWidth: "1200px",

}
const searchStyle = {
  backgroundColor: "#E3E8E9",
  padding:'30px 10px',
  margin:'auto',
  fontSize: '1.2rem',
  color: '#340744',

}

function App() {

  const [form, setForm] = useState({
    type: '',
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

  const [wines, setWines] = useState([]);

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
        setWines(data.recommendedWines);
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
          <label>Variety&nbsp;</label>
          <input type='text' name='type' placeholder='Ex. Merlot' onChange={handleChange} />
          &nbsp; &nbsp; &nbsp;
          <label>Price (max.)&nbsp;</label>

          <input type='number' name='price' placeholder='$' onChange={handleChange} />
          &nbsp; &nbsp; &nbsp;
          <label>Rating&nbsp;</label>
          <input type='number' name='rating' min='0' max='1' step={.05} placeholder='0.80' onChange={handleChange} />
          &nbsp; &nbsp; &nbsp;
          <button onClick={getRecommendation}>Search</button>
        </form>
      </div>
      <WineDisplay wine={wines} />
    </div>
  )
}






export default App
