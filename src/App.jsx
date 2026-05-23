import './App.css'
import Header from '../components/Header'
import reactLogo from './assets/react.svg'
import data from './data.json'
const App = () => {
 console.log(data);
 
  return (
    <div>
      <Header/>
      <h1 className='hed'>App</h1>
      <img src={reactLogo} alt="" />
    </div>
  )
}

export default App

