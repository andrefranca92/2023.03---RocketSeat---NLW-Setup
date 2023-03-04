import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Habit } from './componets/Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Habit completed={3} />
      <Habit completed={10}/>
      <Habit completed={20}/>
      <Habit completed={30}/>
    </div>
  )
}

export default App
