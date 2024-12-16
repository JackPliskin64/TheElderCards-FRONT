import Navbar from "./Navbar";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center">
        <div className="flex">
          {/* Banda negra a la izquierda con imagen y sticky */}
          <div
            className="w-1/6 bg-black opacity-90 sticky top-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.webp')" }}
          ></div>

          {/* Contenido principal */}
          <div className="w-4/6 bg-black bg-opacity-90 min-h-screen">
            <Navbar />

            <div className="text-white text-center mt-8">
              <h1 className="text-4xl font-bold mb-4">
                ¡Bienvenido a Elder Cards!
              </h1>
              <p>Explora nuestras cartas y colecciones exclusivas.</p>
            </div>
            <div className="flex justify-center mt-8">
              <img src="hero.jpg" alt="hero" className="w-full" />
            </div>

            <div className="text-white text-center mt-8">
              <h1 className="text-4xl font-bold mb-4">¡Colecciona cartas!</h1>
            </div>
            <div className="flex justify-center mt-8">
              <img src="hero.jpg" alt="hero" className="w-full" />
            </div>

            <div className="text-white text-center mt-8">
              <h1 className="text-4xl font-bold mb-4">
                ¡Crea tus propias cartas!
              </h1>
            </div>
            <div className="flex justify-center mt-8">
              <img src="hero.jpg" alt="hero" className="w-full" />
            </div>

            {/* Añadimos el Footer aquí */}
            <Footer />
          </div>

          {/* Banda negra a la derecha con imagen y sticky */}
          <div
            className="w-1/6 bg-black opacity-90 sticky top-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.webp')" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Landing;
