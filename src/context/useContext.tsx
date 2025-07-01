/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */


import { createContext, useContext, ReactNode, useState } from "react";
import { produtos, Produto } from "../db/produtos";

interface ProdutoContextType {
  listaProdutos: Produto[];
  cart:Produto[];
  count: any
  setCount: any
  setCart:any
}

const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

export const ProdutoProvider = ({ children }: { children: ReactNode }) => {
  const listaProdutos = produtos; // dados mockados
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  return (
    <ProdutoContext.Provider value={{ listaProdutos, cart, count, setCount, setCart}}>
      {children}
    </ProdutoContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useProdutos = (): ProdutoContextType => {
  const context = useContext(ProdutoContext);
  if (!context) {
    throw new Error("useProdutos deve ser usado dentro de ProdutoProvider");
  }
  return context;
};
