import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditorUnity from "../unity/EditorUnity";

function Videojuego() {
  const navegacion = useNavigate();
  const { titulo } = useParams();
  useEffect(() => {}, [titulo]);
  return (
    <div className="h-svh w-svw flex flex-col p-4">
      <header className="top-0 flex flex-row justify-between">
        <h1 className="text-[2rem] py-4">{titulo}</h1>
        <button
          className="text-[2rem] cursor-pointer"
          type="button"
          onClick={() => navegacion("/")}
        >
          Volver
        </button>
      </header>
      <main className="flex flex-col flex-1 min-h-0">
        <div className="h-full border-4 border-white">
          <EditorUnity />
        </div>
      </main>
      <footer className="bottom-0">
        <h2 className="text-center text-[1.5rem] py-4">Hecho en Unity</h2>
      </footer>
    </div>
  );
}
export default Videojuego;
