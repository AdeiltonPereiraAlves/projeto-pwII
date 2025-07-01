import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ProdutoProvider } from "./context/useContext.tsx";
import { CarrinhoProvider } from "./context/CarrinhoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CarrinhoProvider>
      <ProdutoProvider>
        <App />
      </ProdutoProvider>
    </CarrinhoProvider>
  </StrictMode>
);
