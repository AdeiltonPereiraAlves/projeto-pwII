
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'

import DashboardProdutos from './components/Dashboard'
import Home from './components/Home'
import DetalheProduto from './components/DetalheProduto'


function App() {
  
  return (
    <>
      <div className='bg-gray-100 h-full' >
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardProdutos />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
        {/* outras rotas */}
      </Routes>
       
        <Footer/>
      </div>
       
    </>
  )
}

export default App
