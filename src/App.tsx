import { useState } from 'react'
import './App.css'
import ParlayForm from './components/ParlayForm'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{ padding: "20px" }}>
        <h1>Parlay Predictor</h1>
        <ParlayForm ></ParlayForm>
      </div>
  )
}

export default App
