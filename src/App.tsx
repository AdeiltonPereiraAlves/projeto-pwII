
import './App.css'
import ListaProdutos from './components/ListaProdutos'
import Pagina from './components/Pagina'


function App() {
  
  return (
    <>
      <div className='bg-gray-600' >
        <Pagina>
          <ListaProdutos/>
        </Pagina>
      </div>
       
    </>
  )
}

export default App
