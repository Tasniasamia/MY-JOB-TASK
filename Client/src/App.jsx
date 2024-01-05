import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Header from './Components/Shared/Header/Header'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </div>
  )
}

export default App
