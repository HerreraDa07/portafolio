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
    <Canvas camera={{ position: [0, 0, 5], fov: 30 }} className=" ">
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
  );
}
export default Panel3D;
