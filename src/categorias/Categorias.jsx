// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Blender from "./Blender";
import Unity from "./Unity";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import Panel3D from "../panel3d/Panel3D";
import EditorUnity from "../unity/EditorUnity";
import { useNavigate } from "react-router-dom";
function Categorias() {
  const categorias = [Blender, Unity, Frontend, Backend];
  const navegacion = useNavigate();
  const [modelo, setModelo] = useState("");
  useEffect(() => {
    const inicial = () => {
      setModelo("/portafolio/modelos3d/calabaza.glb");
    };
    inicial();
  }, []);
  const seleccion = (selectedIndex) => {
    if (selectedIndex === 0) {
      return <Panel3D modelo3D={modelo} />;
    }
  };
  return (
    <div>
      <TabGroup>
        {({ selectedIndex }) => (
          <>
            <TabList className="flex flex-row justify-around">
              {categorias.map(({ nombre }, index) => (
                <motion.div
                  key={nombre}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={
                    selectedIndex === index
                      ? {
                          scale: [1.1, 0.8, 1.1],
                          transition: { repeat: Infinity },
                        }
                      : { scale: 1 }
                  }
                >
                  <Tab className="px-[0.5rem] rounded-2xl focus:outline-0 data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/15 data-[focus]:outline-1 data-[focus]:outline-white">
                    {nombre}
                  </Tab>
                </motion.div>
              ))}
            </TabList>
            <div className="h-[40rem]">
              <TabPanels className="h-1/2">
                {categorias.map(({ nombre, proyectos }) => (
                  <TabPanel key={nombre}>
                    <ul>
                      {proyectos.map((proyecto) => (
                        <li
                          key={proyecto.id}
                          onClick={() => {
                            if (selectedIndex == 0) {
                              setModelo(proyecto.url);
                            } else if (selectedIndex === 1) {
                              navegacion(
                                `/videojuego/${encodeURIComponent(
                                  proyecto.titulo
                                )}`
                              );
                            }
                          }}
                        >
                          <span
                            className={`cursor-pointer hover:bg-white/5 px-[0.5rem] rounded-2xl ${
                              modelo === proyecto.url ? "bg-white/10" : ""
                            }`}
                          >
                            {proyecto.titulo}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>
                ))}
              </TabPanels>
              <div className="h-1/2">{seleccion(selectedIndex)}</div>
            </div>
          </>
        )}
      </TabGroup>
    </div>
  );
}

export default Categorias;
