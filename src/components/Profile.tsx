import Layout from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import Login from "../components/Login";
import { useState } from "react";

function Profile() {
  const { user, updateUser } = useAuth();

  // Estados para gestionar los valores de los inputs
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>(""); // Para los mensajes de éxito

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  const validateEmail = (email: string): string | null => {
    if (!email) return null;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      return "Por favor ingrese un correo electrónico válido.";
    }
    return null;
  };

  const validateUsername = (username: string): string | null => {
    if (!username) return null;
    if (username.length < 3) {
      return "El nombre de usuario debe tener al menos 3 caracteres.";
    }
    return null;
  };

  const saveChanges = () => {
    if (user) {
      const emailError = validateEmail(newEmail);
      const usernameError = validateUsername(newUsername);

      if (emailError || usernameError) {
        setErrorMessage(emailError || usernameError);
        setSuccessMessage(""); // Limpiamos el mensaje de éxito
        return;
      }

      if (newUsername || newEmail) {
        setErrorMessage(""); // Limpiamos errores
        updateUser(newUsername || user.username, newEmail || user.email); // Actualizamos los datos
        setSuccessMessage("Los cambios se han guardado correctamente."); // Mostramos mensaje de éxito
      } else {
        setErrorMessage("No se realizaron cambios.");
        setSuccessMessage(""); // Limpiamos el mensaje de éxito
      }
    }
  };

  if (!user) {
    return <Login />;
  }

  return (
    <Layout>
      <div className="flex-grow flex items-center justify-center py-12 bg-black bg-opacity-5">
        <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden">
          <div className="w-1/3 bg-slate-600 flex flex-col items-center justify-center p-6">
            <img
              className="w-36 h-36 rounded-full border-4 border-white object-cover mb-4"
              src={user.photoURL}
              alt="Perfil"
            />
            <button className="bg-slate-700 text-white py-2 rounded-md mt-8 p-8 hover:bg-slate-500 transition-transform transform hover:scale-105">
              Cambiar imagen
            </button>
          </div>

          <div className="w-2/3 p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Editar Perfil
            </h2>

            {/* Mensaje de error */}
            {errorMessage && (
              <div className="mb-4 text-red-500 text-center">
                {errorMessage}
              </div>
            )}

            {/* Mensaje de éxito */}
            {successMessage && (
              <div className="mb-4 text-green-500 text-center">
                {successMessage}
              </div>
            )}

            {/* Campo Nombre */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Nombre de Usuario: <b>{user.username}</b>
              </label>
              <input
                type="text"
                value={newUsername}
                onChange={handleUsernameChange}
                id="username"
                placeholder="Nuevo nombre de usuario"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Campo Correo */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Correo Electrónico: <b>{user.email}</b>
              </label>
              <input
                type="email"
                value={newEmail}
                onChange={handleEmailChange}
                id="email"
                placeholder="Nuevo correo electrónico"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Botón Actualizar */}
            <button
              onClick={saveChanges}
              className="w-full bg-slate-600 text-white py-2 rounded-md hover:bg-slate-500 transition-transform transform hover:scale-105"
            >
              Actualizar Perfil
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
