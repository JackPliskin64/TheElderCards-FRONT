import Layout from "../components/Layout";

function Landing() {
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center">
        <Layout>
          <div className=" bg-black bg-opacity-90 min-h-screen">
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
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Landing;
