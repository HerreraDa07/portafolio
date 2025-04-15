import {
  Bounds,
  Environment,
  OrbitControls,
  useBounds,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
function Model({ url }) {
  const { scene } = useGLTF(url);
  const limites = useBounds();
  useEffect(() => {
    if (scene) {
      limites.refresh(scene).clip().fit();
    }
  }, [scene, limites, url]);
  return <primitive object={scene} />;
}
function Panel3D({ modelo3D }) {
  return (
    <div className="bg-white/70 border-[0.8rem] md:border-[1rem] lg:border-[1.5rem] xl:border-[1rem] rounded-[3rem] w-3/4 sm:w-1/2 md:w-5/6 h-80 md:h-[30rem] lg:h-[35rem] xl:h-[30rem] 2xl:h-[35rem]">
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        <Suspense>
          <Environment preset="sunset" background={false} />
          <Bounds fit clip maxDuration={0.5} margin={1.1}>
            <Model url={modelo3D} />
          </Bounds>
          <OrbitControls
            makeDefault
            enableDamping
            dampingFactor={0.5}
            enablePan={false}
            minDistance={0}
            maxDistance={5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default Panel3D;
