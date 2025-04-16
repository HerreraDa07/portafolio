import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Videojuego() {
  const { titulo } = useParams();
  useEffect(() => {}, [titulo]);
  return (
    <div>
      <header>
        <h1>{titulo}</h1>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
export default Videojuego;
