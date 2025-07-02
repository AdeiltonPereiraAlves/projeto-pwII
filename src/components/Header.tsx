import Cart from "./Cart";
import BuscarProdutos from "./BuscarProdutos";
import { BuscarProdutosProps } from "./BuscarProdutos";

export default function Header({ onBuscar }: BuscarProdutosProps) {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md w-full">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        <h1 className="text-xl font-bold">Minha Loja</h1>

        <nav className="space-x-4 text-sm">
          <a href="#" className="hover:text-gray-300">Início</a>
          <a href="#" className="hover:text-gray-300">Produtos</a>
          <a href="#" className="hover:text-gray-300">Contato</a>
        </nav>

        <BuscarProdutos onBuscar={onBuscar} /> 
        <Cart />
      </div>
    </header>
  );
}
