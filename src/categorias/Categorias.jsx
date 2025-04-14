// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Blender from "./Blender";
import Unity from "./Unity";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import Panel3D from "./Panel3D";
function Categorias() {
  const [modelo, setModelo] = useState("");
  useEffect(() => {
    const inicial = () => {
      setModelo("/portafolio/modelos3d/calabaza.glb");
    };
    inicial();
  }, []);
  const categorias = [Blender, Unity, Frontend, Backend];
  const [activarAnimacion, setActivarAnimacion] = useState(
    categorias.map(() => false)
  );
  const booleano = (index) => {
    setActivarAnimacion(activarAnimacion.map((_, i) => i === index));
  };
  return (
    <div>
      <TabGroup>
        <TabList className="flex flex-row justify-center text-[1.1rem] 2xl:text-5xl md:text-4xl sm:text-3xl 2xl:gap-32 xl:gap-24 lg:gap-16 md:gap-8 sm:gap-4 gap-1">
          {categorias.map(({ nombre }, index) => (
            <motion.div
              key={nombre}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={
                activarAnimacion[index]
                  ? { scale: [1.1, 0.8, 1.1], transition: { repeat: Infinity } }
                  : { scale: 1 }
              }
              onClick={() => booleano(index)}
            >
              <Tab className="px-2 sm:px-5 pt-3 pb-1.5 rounded-4xl focus:outline-0 data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/15 data-[focus]:outline-1 data-[focus]:outline-white">
                {nombre}
              </Tab>
            </motion.div>
          ))}
        </TabList>
        <div className="flex flex-col-reverse md:flex-row-reverse md:py-4 md:px-8">
          <Panel3D modelo3D={modelo} />
          <TabPanels className="flex md:w-1/2 py-5 text-[1rem] 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-[1.3rem]">
            {categorias.map(({ nombre, proyectos }) => (
              <TabPanel key={nombre}>
                <ul className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-6">
                  {proyectos.map((proyecto) => (
                    <li
                      key={proyecto.id}
                      onClick={() => setModelo(proyecto.url)}
                    >
                      <a href="#">{proyecto.titulo}</a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </div>
      </TabGroup>
    </div>
  );
}

export default Categorias;
