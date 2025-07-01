export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Minha Loja</h1>
        <nav className="space-x-4 text-sm">
          <a href="#" className="hover:text-gray-300">Início</a>
          <a href="#" className="hover:text-gray-300">Produtos</a>
          <a href="#" className="hover:text-gray-300">Contato</a>
        </nav>
      </div>
    </header>
  );
}