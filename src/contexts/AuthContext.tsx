import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => {
    setUser(username); // Simula el login
  };

  const logout = () => {
    setUser(null); // Simula el logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
