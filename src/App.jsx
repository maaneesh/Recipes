import { useState } from 'react'
import Fetch from './components/Fetch'
import Joke from './components/Joke'
import Wine from './components/Wine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wine/>
     <Fetch/>

    </>
  )
}

export default App
