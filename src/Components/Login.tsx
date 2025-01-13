import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth, users } from "../contexts/AuthContext"; // Usamos el contexto AuthContext
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const navigate = useNavigate();
  const { login } = useAuth(); // Obtenemos usuarios y la función login del contexto

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Todos los campos son obligatorios.");
      setSuccessMessage("");
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("El correo electrónico no es válido.");
      setSuccessMessage("");
      return;
    }

    // Validar credenciales contra los usuarios del contexto
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setErrorMessage("");
      setSuccessMessage("¡Inicio de sesión exitoso!");
      login(email, password); // Iniciar sesión con el contexto
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      setErrorMessage("Correo o contraseña incorrectos.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <Layout>
        <div className="flex-grow flex items-center justify-center py-12">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-black">
              Inicia sesión
            </h2>

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

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-transform transform hover:scale-105"
              >
                Iniciar sesión
              </button>
            </form>

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
      </Layout>
    </div>
  );
}

export default Login;
