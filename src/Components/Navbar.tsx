import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Hook de autenticación

function Navbar() {
  const { user, logout } = useAuth(); // Contexto de autenticación

  // Imagen por defecto si el usuario no tiene imagen
  const defaultImage = "https://via.placeholder.com/40";

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

        {/* Links de autenticación */}
        <ul className="flex space-x-8 items-center">
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
                <Link to="/profile" className="flex items-center space-x-2">
                  {/* Imagen de perfil */}
                  <img
                    src={user.photoURL || defaultImage} // Imagen del usuario o la predeterminada
                    alt="Perfil"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <span className="text-black hover:text-gray-500">Perfil</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-black hover:text-gray-500"
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
