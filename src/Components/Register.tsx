import { useState } from "react";
import Layout from "../components/Layout";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {
  // Estados para los campos del formulario
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Expresiones regulares para validaciones
  const usernameRegex = /^.{3,}$/; // Al menos 3 caracteres
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") setUsername(value);
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  // Manejar el envío del formulario (simulación de registro)
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // Comprobaciones de validación
    if (!username || !email || !password) {
      setErrorMessage("Todos los campos son obligatorios.");
      setSuccessMessage("");
    } else if (!usernameRegex.test(username)) {
      setErrorMessage("El nombre de usuario debe tener al menos 3 caracteres.");
      setSuccessMessage("");
    } else if (!passwordRegex.test(password)) {
      setErrorMessage(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo especial."
      );
      setSuccessMessage("");
    } else {
      // Simulación de éxito en el registro
      setErrorMessage("");
      setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <Layout>
        {/* Formulario Register */}
        <div className="flex flex-grow items-center justify-center py-12">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-black">
              Crea tu cuenta
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
              {/* Campo Usuario */}
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="username"
                >
                  Nombre de usuario
                </label>
                <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleChange}
                    placeholder="Tu nombre de usuario"
                    className="w-full outline-none"
                  />
                </div>
              </div>

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
                Registrarse
              </button>
            </form>

            {/* Enlace a Login */}
            <div className="text-center mt-4">
              <p className="text-gray-700">
                ¿Ya tienes una cuenta?{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                  Inicia sesión
                </a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
