import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { AuthProvider } from "./contexts/AuthContext"; // Asegúrate de que la ruta es correcta

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Proveemos el contexto de autenticación a toda la aplicación */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
