// src/components/Header.tsx
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">Minha Loja</Link>
        </h1>
        <nav className="space-x-4 text-sm">
          <Link to="/"      className="hover:text-gray-300">Início</Link>
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/contato"   className="hover:text-gray-300">Contato</Link>
        </nav>
        <Cart />
      </div>
    </header>
  );
}
