import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Asegúrate de que el hook useAuth está correctamente importado

function Navbar() {
  const { user, logout } = useAuth(); // Accede al contexto de autenticación

  return (
    <div className="sticky top-0 bg-slate-600 shadow-md z-10">
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo o título */}
        <div className="text-2xl font-bold text-black">
          <Link to="/">The Elder Cards</Link>
        </div>

        {/* Links del Navbar */}
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-500">
              Inicio
            </Link>
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

        {/* Links de autenticación (Login/Registro o Perfil y Logout) */}
        <ul className="flex space-x-8">
          {!user ? (
            <>
              <li>
                <Link to="/register" className="hover:text-gray-500">
                  Registro
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-gray-500">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile" className="hover:text-gray-500">
                  Perfil
                </Link>
              </li>
              <li>
                <button
                  onClick={logout} // Al hacer logout, se ejecuta la función logout del contexto
                  className="text-gray-500 hover:text-red-500"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
