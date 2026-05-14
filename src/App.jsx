
import { useState } from 'react';
import './App.css'
import Navbar from './Navbar'




function App() {
 
const [ count , func] = useState(0);
 function increment() {
 func(count+1)
  
 }
  return (
    <div>
<button onClick={increment}>Increment</button>
{count}
    </div>
  )
}

export default App
