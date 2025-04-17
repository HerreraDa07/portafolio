import Categorias from "../categorias/Categorias";

function Portafolio() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <header className="top-0">
        <h1 className="text-[2rem] text-right py-[0.5rem] pr-[0.5rem]">
          Portafolio
        </h1>
      </header>
      <main className="flex flex-col flex-1 min-h-0">
        <h2 className="text-[1.5rem] text-center">Proyectos</h2>
        <Categorias />
      </main>
      <footer className="bottom-0">
        <h3 className="text-center py-[0.5rem]">
          Pagina realizada por David Herrera <br />
          Desarrollado con React + Tailwind CSS <br />© 2025
        </h3>
      </footer>
    </div>
  );
}

export default Portafolio;
