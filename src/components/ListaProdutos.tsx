import { useProdutos } from "../context/useContext";
import Card from "./Card";

interface ListaProdutosProps {
  filtro: string;
}

export default function ListaProdutos({ filtro }: ListaProdutosProps) {
  const { listaProdutos } = useProdutos();

  const produtosFiltrados = listaProdutos.filter((produto) =>
    produto.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <Card key={produto.id} produto={produto} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            Nenhum produto encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
