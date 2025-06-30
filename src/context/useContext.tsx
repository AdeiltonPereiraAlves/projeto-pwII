/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */


// import  { createContext, useContext, useState, ReactNode, useEffect } from 'react';
// import { Produto, produtos } from '../db/produtos';
// // 1.1 Tipo do usuário
// // type Produto = {
// //   id: number;
// //   nome: string;
// //   descricao: string;
// //   preco: number;
// //   quantidade: number
// // };

// // 1.2 Tipo do contexto
// type ProdutoContextType = {

//   dados: any
//   getDados: ( ) => any;
//   setDados: any
 
// };

// // 1.3 Valor padrão do contexto
// const AuthContext = createContext<ProdutoContextType | undefined>(undefined);
// // 1.4 Provider
// export const ProdutoProvider = ({ children }: { children: ReactNode }) => {
//     const [dados, setDados] = useState<Produto[]>([]);
    
//     async function getDados() {
        

//         setDados(produtos)
//     }
//     useEffect(() => {
//          try {
//                getDados()
//          } catch (error:any) {
//              throw new Error("erro ao buscar dados")
//          }
//      },[])


  

//   return (
//     <AuthContext.Provider value={{getDados, dados, setDados  }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // 1.5 Hook para usar o contexto
// export const useProdutos = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth deve ser usado dentro de um AuthProvider');
//   }
//   return context;
// };

import { createContext, useContext, ReactNode } from "react";
import { produtos, Produto } from "../db/produtos";

interface ProdutoContextType {
  listaProdutos: Produto[];
}

const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

export const ProdutoProvider = ({ children }: { children: ReactNode }) => {
  const listaProdutos = produtos; // dados mockados

  return (
    <ProdutoContext.Provider value={{ listaProdutos }}>
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
