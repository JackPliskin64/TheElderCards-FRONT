function Navbar() {
  return (
    // Navbar sticky
    <div className="sticky top-0 bg-slate-600	 shadow-md z-10">
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo o título */}
        <div className="text-2xl font-bold text-black">The Elder Cards</div>

        {/* Links del Navbar */}
        <ul className="flex space-x-8">
          <li>
            <a href="#inicio" className="hover:text-gray-500">
              Inicio
            </a>
          </li>
          <li>
            <a href="#cartas" className="hover:text-gray-500">
              Cartas
            </a>
          </li>
          <li>
            <a href="#colecciones" className="hover:text-gray-500">
              Colecciones
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-gray-500">
              Contacto
            </a>
          </li>
        </ul>
        <ul className="flex space-x-8">
          <li>
            <a href="#inicio" className="hover:text-gray-500">
              Registro
            </a>
          </li>
          <li>
            <a href="#inicio" className="hover:text-gray-500">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
