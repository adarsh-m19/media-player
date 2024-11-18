
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'








function App() {
  

  return (
    <>
    <Header />
    <Routes>

      <Route element={ <Landing /> } path='/'/>
      <Route element={  <Home />  } path='/home'/>
      <Route element={  <History />  } path='/history'/>
       
       
   </Routes>   
   <Footer />

    
    
    </>
  )
}

export default App
