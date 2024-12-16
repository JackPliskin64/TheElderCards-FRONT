function Footer() {
  return (
    <div className="bg-black text-white py-6">
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The Elder Cards. Todos los derechos
          reservados.
        </p>
        <p className="text-sm mt-2">Hecho con ❤️ por el equipo de TEC.</p>
      </div>
    </div>
  );
}

export default Footer;
