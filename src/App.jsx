import { useState } from 'react'
import {Link} from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome</h1>
      <h2>Introduction to React</h2>
      <h3>Front End Development Frameworks</h3>
      <h4>2400031009-Bhavishya</h4>
      <Link to="/Page1">Go To Page1</Link>
           <Link to="/Page2">Go To Page2</Link>
             <Link to="/Page3">Go To Page3</Link>

    </>
  )
}

export default App