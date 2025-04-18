// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Blender from "./tabs/Blender";
import Unity from "./tabs/Unity";
import Frontend from "./tabs/Frontend";
import Backend from "./tabs/Backend";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import Panel3D from "../blender/Panel3D";
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
      return (
        <div className="flex flex-col h-1/2 border-white border-4 rounded-3xl xl:w-2/3 xl:h-[85%] xl:mr-8">
          <Panel3D modelo3D={modelo} />
        </div>
      );
    }
  };
  return (
    <TabGroup className="flex flex-col flex-1 min-h-0 justify-center">
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
                <Tab className="text-[1.5rem] xl:text-[2rem] px-[0.5rem] rounded-2xl focus:outline-0 data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/15 data-[focus]:outline-1 data-[focus]:outline-white">
                  {nombre}
                </Tab>
              </motion.div>
            ))}
          </TabList>
          <div className="flex flex-col h-[90%] xl:flex-row xl:flex-1 xl:items-center">
            <TabPanels className="flex flex-col h-1/2 p-4 xl:w-1/3 xl:h-full xl:ml-8">
              {categorias.map(({ nombre, proyectos }) => (
                <TabPanel
                  key={nombre}
                  className="flex flex-col flex-1 min-h-0 xl:my-8"
                >
                  <ul className="overflow-y-auto">
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
                          className={`lg:text-[2rem] cursor-pointer hover:bg-white/5 px-[0.5rem] rounded-2xl ${
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
            {seleccion(selectedIndex)}
          </div>
        </>
      )}
    </TabGroup>
  );
}

export default Categorias;
