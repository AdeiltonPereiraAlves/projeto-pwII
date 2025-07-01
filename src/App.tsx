
import './App.css'
import CarrinhoLateral from './components/CartLateral'
import Footer from './components/Footer'
import Header from './components/Header'
import ListaProdutos from './components/ListaProdutos'
import Pagina from './components/Pagina'


function App() {
  
  return (
    <>
      <div className='bg-gray-100' >
        <Header/>
        <Pagina>
          <ListaProdutos/>
          <div>
            <CarrinhoLateral/>
          </div>
        </Pagina>
        <Footer/>
      </div>
       
    </>
  )
}

export default App
