import './App.css'
import { useState } from 'react'
import CarrinhoLateral from './components/CartLateral'
import Footer from './components/Footer'
import Header from './components/Header'
import ListaProdutos from './components/ListaProdutos'
import Pagina from './components/Pagina'

function App() {
  const [busca, setBusca] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onBuscar={setBusca} />
      <main className="flex-1">
        <Pagina>
          <ListaProdutos filtro={busca} />
          <CarrinhoLateral />
        </Pagina>
      </main>
      <Footer />
    </div>
  );
}


export default App
