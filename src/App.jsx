import { useState } from 'react'
import Background from './components/BackgroundLines'
import Navbar from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
      {/* <h1 className='bg-red-700 text-3xl font-bold underline text-'>HEllo</h1> */}
      <Background/>
      <Navbar/>
    </div>
  )
}

export default App
