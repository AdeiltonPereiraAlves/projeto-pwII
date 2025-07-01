import { useProdutos } from "../context/useContext";
import Card from "./Card";

export default function ListaProdutos() {
  const { listaProdutos } = useProdutos();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {listaProdutos.map((produto) => (
        <Card key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
