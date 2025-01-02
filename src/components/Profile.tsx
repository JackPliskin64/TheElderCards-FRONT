import Layout from "../components/Layout";

function Profile() {
  return (
    <Layout>
      <div className="p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Perfil</h1>
        <p>
          Bienvenido a tu perfil. Aquí puedes gestionar tus datos y
          preferencias.
        </p>
      </div>
    </Layout>
  );
}

export default Profile;
