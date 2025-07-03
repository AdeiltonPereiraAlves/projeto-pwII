import { useEffect, useState } from "react";
import { useProdutoContext } from "../context/ProdutoContext"; // ou useCarrinho, se você guardou os produtos lá
import Card from "./Card";
import { Produto } from "../db/produtos"

export default function ListaProdutos() {
  const { produtos } = useProdutoContext();
  const [lista, setLista] = useState<Produto[]>([]);

  // sincroniza o estado local sempre que o contexto de produtos mudar
  useEffect(() => {
    setLista(produtos);
  }, [produtos]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {lista.map((produto) => (
        <Card key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
