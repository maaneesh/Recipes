import { useState } from 'react'
import Joke from './components/Joke'
import Wine from './components/Wine'
import WineDisplay from './components/WineDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wine/>
     <WineDisplay/>
     </>
  )
}

export default App
