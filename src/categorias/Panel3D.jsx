import { Bounds, OrbitControls, useBounds, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
function Model({ url }) {
  const { scene } = useGLTF(url);
  const centrar = useBounds();
  useEffect(() => {
    centrar.refresh(scene).fit();
  }, [scene, centrar]);
  return <primitive object={scene} />;
}
function Panel3D({ modelo3D }) {
  return (
    <div className="bg-white md:w-1/2 h-80 md:h-[30rem] lg:h-[40rem] xl:h-[20rem] 2x1:h-[30rem]">
      <Canvas>
        <Suspense>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0.1, 0.1, 0.1]} />
          <Bounds fit clip observe margin={1.5}>
            <Model url={modelo3D} />
          </Bounds>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default Panel3D;
