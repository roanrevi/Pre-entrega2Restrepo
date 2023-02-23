//rafce
import React from 'react'
import Consulta from './components/Consulta'
import Contador from './components/Contador'
import FotoInicio from './components/FotoInicio'
import ItemListConteiner from './components/ItemListConteiner'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>        
        <Routes>
          <Route exact path="/" element={<FotoInicio/>}/>
          <Route exact path="/catalogo" element={<ItemListConteiner greeting="Algunos Buscan la Mejor Empresa, Nosotros la Creamos"/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route  exact path='/cargo/:cargo' element={<ItemListConteine r/>}/> 
          <Route  exact path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      
      </div>
    
    
  )
}


export default App
