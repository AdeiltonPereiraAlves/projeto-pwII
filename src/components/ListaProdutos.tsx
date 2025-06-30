import { useProdutos } from "../context/useContext";

export default function ListaProdutos() {
  const { listaProdutos } = useProdutos();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {listaProdutos.map((produto) => (
        <div
          key={produto.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer"
        >
          <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-contain" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="text-gray-600 text-sm">{produto.descricao}</p>
            <p className="mt-2 text-blue-600 font-bold">R$ {produto.preco.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
