// Login.tsx
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext"; // Importamos el hook useAuth
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
  // Estados para los campos del formulario
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Accedemos a la función login desde el contexto
  const { login } = useAuth();

  // Expresión regular para la validación del email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Manejar el cambio en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  // Manejar el envío del formulario (simulación de login)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Comprobaciones de validación
    if (!email || !password) {
      setErrorMessage("Todos los campos son obligatorios.");
      setSuccessMessage("");
    } else if (!emailRegex.test(email)) {
      setErrorMessage("El correo electrónico no es válido.");
      setSuccessMessage("");
    } else {
      // Simulación de éxito en el login
      setErrorMessage("");
      setSuccessMessage("¡Inicio de sesión exitoso!");

      // Llamamos al login del contexto con el email del usuario
      login(email);

      // Limpiamos los campos
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <div className="flex">
        {/* Banda negra a la izquierda */}
        <div
          className="w-1/6 bg-black opacity-90 sticky top-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.webp')" }}
        ></div>

        {/* Contenido principal */}
        <div className="w-4/6 flex flex-col justify-between bg-black bg-opacity-90 min-h-screen">
          <Navbar />

          {/* Formulario Login */}
          <div className="flex items-center justify-center py-12">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
              <h2 className="text-3xl font-bold mb-6 text-center text-black">
                Inicia sesión
              </h2>

              {/* Mostrar mensajes de error o éxito */}
              {errorMessage && (
                <div className="mb-4 text-red-500 text-center">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="mb-4 text-green-500 text-center">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Campo Email */}
                <div className="mb-4 relative">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>
                  <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <FaEnvelope className="text-gray-500 mr-2" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="ejemplo@correo.com"
                      className="w-full outline-none"
                    />
                  </div>
                </div>

                {/* Campo Password */}
                <div className="mb-6 relative">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <FaLock className="text-gray-500 mr-2" />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handleChange}
                      placeholder="Tu contraseña"
                      className="w-full outline-none"
                    />
                  </div>
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-transform transform hover:scale-105"
                >
                  Iniciar sesión
                </button>
              </form>

              {/* Enlace a Register */}
              <div className="text-center mt-4">
                <p className="text-gray-700">
                  ¿No tienes una cuenta?{" "}
                  <a href="/register" className="text-blue-600 hover:underline">
                    Regístrate
                  </a>
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        {/* Banda negra a la derecha */}
        <div
          className="w-1/6 bg-black opacity-90 sticky top-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.webp')" }}
        ></div>
      </div>
    </div>
  );
}

export default Login;
