import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Interfaz para el usuario
interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  photoURL: string;
}

// Interfaz del contexto
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (newUserName: string, newEmail: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
let userId: number | null = null;

interface AuthProviderProps {
  children: ReactNode;
}

export const users: User[] = [
  {
    id: 0,
    email: "ethan@example.com",
    password: "1234",
    username: "Ethan",
    photoURL:
      "https://www.zooplus.es/magazine/wp-content/uploads/2018/04/fotolia_169457098.jpg",
  },
  {
    id: 1,
    email: "jane.doe@example.com",
    password: "password",
    username: "Jane Doe",
    photoURL: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    email: "john.smith@example.com",
    password: "qwerty",
    username: "John Smith",
    photoURL: "https://via.placeholder.com/40",
  },
];

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Verificar si hay un usuario guardado en el localStorage al cargar la aplicación
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Recuperamos el usuario del localStorage
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    userId = foundUser ? foundUser.id : null;
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser)); // Guardamos en el localStorage
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Eliminamos del localStorage al cerrar sesión
  };

  const updateUser = (newUserName: string, newEmail: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        email: newEmail || user.email,
        username: newUserName || user.username,
      };

      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser)); // Actualizamos el localStorage
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
