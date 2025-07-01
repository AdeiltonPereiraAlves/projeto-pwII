
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListaProdutos from './components/ListaProdutos'
import Pagina from './components/Pagina'


function App() {
  
  return (
    <>
      <div className='bg-gray-600' >
        <Pagina>
          <Header/>
          <ListaProdutos/>
        </Pagina>
        <Footer/>
      </div>
       
    </>
  )
}

export default App
