import Blender from "./Blender";
import Unity from "./Unity";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
function Categorias() {
  const categorias = [Blender, Unity, Frontend, Backend];
  console.log(categorias);
  return (
    <div>
      <TabGroup>
        <TabList className="flex flex-row justify-center  text-2xl 2xl:text-5xl md:text-4xl sm:text-3xl 2xl:gap-32 xl:gap-24 lg:gap-16 md:gap-12 sm:gap-8 gap-4">
          {categorias.map(({ nombre }) => (
            <Tab key={nombre}>{nombre}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {categorias.map(({ nombre, proyectos }) => (
            <TabPanel key={nombre}>
              <ul>
                {proyectos.map((proyecto) => (
                  <li key={proyecto.id}>
                    <a href="#">{proyecto.titulo}</a>
                  </li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default Categorias;
