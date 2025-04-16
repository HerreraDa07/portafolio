import { useEffect, useRef } from "react";

function EditorUnity() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "/portafolio/aplicaciones/videojuegos/Build/PruebasUnity.loader.js"; // sin %20 si renombraste bien
    script.onload = () => {
      if (window.createUnityInstance && canvasRef.current) {
        window
          .createUnityInstance(canvasRef.current, {
            dataUrl:
              "/portafolio/aplicaciones/videojuegos/Build/PruebasUnity.data",
            frameworkUrl:
              "/portafolio/aplicaciones/videojuegos/Build/PruebasUnity.framework.js",
            codeUrl:
              "/portafolio/aplicaciones/videojuegos/Build/PruebasUnity.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "Fortune Games",
            productName: "Prueba de Unity",
            productVersion: "0.1",
          })
          .catch((err) =>
            console.error("Error al crear instancia de Unity", err)
          );
      } else {
        console.error("No se encontró createUnityInstance o canvasRef");
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <canvas
      id="unity-canvas"
      ref={canvasRef}
      style={{ width: "100%", height: "100vh" }}
      tabIndex={0}
    />
  );
}

export default EditorUnity;
