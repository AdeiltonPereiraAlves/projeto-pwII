import { useProdutos } from "../context/useContext";
import { Produto } from "../db/produtos";
import Botao from "./Botao";

interface CardProps {
  produto: Produto;
}

export default function Card({ produto }: CardProps) {
    const { setCount} = useProdutos()

    function addCart(){
        setCount((prev: number) => prev+1)
    }
  return (
    <div
      key={produto.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer"
    >
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-48 object-contain"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{produto.nome}</h2>
        <p className="text-gray-600 text-sm">{produto.descricao}</p>
        <p className="mt-2 text-blue-600 font-bold">
          R$ {produto.preco.toFixed(2)}
        </p>
        
          <button className="flex w-full justify-center items-center" onClick={addCart}>
            <Botao texto="Comprar" />
          </button>
      
      </div>
    </div>
  );
}
