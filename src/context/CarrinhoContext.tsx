import { createContext, useContext, useState, ReactNode } from "react";
import { Produto } from "../db/produtos";

interface CarrinhoContextType {
  aberto: boolean;
  count: number
  abrirCarrinho: () => void;
  fecharCarrinho: () => void;
  items: Produto[];
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: number) => void;
}
const CarrinhoContext = createContext<CarrinhoContextType | undefined>(
  undefined
);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [aberto, setAberto] = useState(false);
   const [items, setItems] = useState<Produto[]>([]);
   const [count, setCount] = useState(0);
  const abrirCarrinho = () => setAberto(true);
  const fecharCarrinho = () => setAberto(false);
  const adicionarProduto = (produto: Produto) => {
    setCount((prev) => prev+ 1)
    setItems((prev) => [...prev, produto]);
  };

  const removerProduto = (id: number) => {
    setCount((prev) => prev- 1)
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CarrinhoContext.Provider value={{ aberto, abrirCarrinho, fecharCarrinho, items, adicionarProduto, removerProduto,count}}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider");
  }
  return context;
};
