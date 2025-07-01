/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCarrinho } from "../context/CarrinhoContext";
import { FaTimes } from "react-icons/fa";


export default function CarrinhoLateral() {
  const { aberto, fecharCarrinho, items, removerProduto } = useCarrinho();
  

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 z-50
      ${aberto ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Carrinho</h2>
        <button onClick={fecharCarrinho}>
          <FaTimes size={20} />
        </button>
      </div>
      <div className="p-4">
       
      
          <div className="p-4 space-y-4">
        {items.length === 0 ? (
          <p className="text-sm text-gray-600">Seu carrinho está vazio.</p>
        ) : (
          items.map((produto) => (
            <div key={produto.id} className="flex items-center gap-4 border-b pb-2">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-14 h-14 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{produto.nome}</h3>
                <p className="text-xs text-gray-500">R$ {produto.preco.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removerProduto(produto.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remover
              </button>
            </div>
          ))
        )}
      </div>
         
      </div>
    </div>
  );
}
