import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function FloatingHead() {
  const { nodes, materials } = useGLTF("/models/facetest3.gltf");

  const meshRef = useRef();

  return (
    <group ref={meshRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FBHead003.geometry}
        material={materials["FBHead.001_preview_mat"]}
      />
    </group>
  );
}

useGLTF.preload("/models/facetest3.gltf");
