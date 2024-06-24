import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import General from './components/General'
import Education from './components/Educational'
import Practical from './components/Practical'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CV Application</h1>
      <General></General>
      <Education></Education>
      <Practical></Practical>
    </>
  )
}

export default App
