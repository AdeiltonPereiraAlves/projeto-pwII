import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export type BuscarProdutosProps = {
  onBuscar: (termo: string) => void;
};

export default function BuscarProdutos({ onBuscar }: BuscarProdutosProps) {
  const [termo, setTermo] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTermo(value);
    onBuscar(value);
  }

  return (
    <div className="relative w-full md:w-1/3">
      <FaSearch className="absolute top-3 left-3 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={termo}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
