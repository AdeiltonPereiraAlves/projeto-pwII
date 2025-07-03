import {useCarrinho } from "../context/CarrinhoContext";
import Card from "./Card";

export default function ListaProdutos() {
  const { produtos} = useCarrinho();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {produtos.map((produto) => (
        <Card key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
