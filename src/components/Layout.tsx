import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode; // Contenido dinámico
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
          <main className="flex flex-grow">{children}</main>
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
};

export default Layout;
