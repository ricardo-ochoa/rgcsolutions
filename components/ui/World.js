
import React, { Suspense } from 'react'
import { Canvas, extend, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Effects, Loader, useTexture } from '@react-three/drei'


function Sphere(props) {
  const texture = useTexture('/Albedo.jpg')
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial envMapIntensity={1} map={texture} clearcoat={0.5} clearcoatRoughness={0.5} roughness={2} metalness={0} />
    </mesh>
  )
}

export default Sphere



// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export default function World({ ...props }) {

//   const group = useRef()
//   const { nodes, materials } = useGLTF('/mol.gltf')
  

//   return (
//     <group ref={ group } { ...props } dispose={ null }>
//       <mesh geometry={nodes.Atmosfera.geometry} material={nodes.Atmosfera.material} rotation={[-0.18, 0.72, -0.02]} scale={[1.01, 1.01, 1.02]} />
//       <mesh geometry={nodes.Oblaka.geometry} material={nodes.Oblaka.material} rotation={[1.22, 0.05, -2.31]} scale={[1.02, 1.01, 1.01]} />
//       <mesh geometry={nodes.zemla.geometry} material={nodes.zemla.material} rotation={[1.36, 0.18, -2.15]} scale={[1.01, 1, 1]} />
//     </group>
//   )
// }

// useGLTF.preload('/mol.gltf')


// import React, { useRef } from 'react'
// import { useGLTF, useTexture } from '@react-three/drei'

// export default function World({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/modelworldDraco.gltf')

//   const texture = useTexture('/Albedo.jpg')

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh castShadow receiveShadow geometry={nodes.Atmosfera.geometry} map={ texture } material={materials.Atmosfera} rotation={[-0.18, 0.72, -0.02]} scale={[1.01, 1.01, 1.02]} />
//       <mesh castShadow receiveShadow geometry={nodes.Oblaka.geometry} material={materials.Oblaka} rotation={[1.22, 0.05, -2.31]} scale={[1.02, 1.02, 1.02]} />
//       <mesh castShadow receiveShadow geometry={nodes.zemla.geometry} map={ texture } rotation={[1.36, 0.18, -2.15]} scale={[1, 1, 1]} />
//     </group>
//   )
// }

// useGLTF.preload('/modelworldDraco.gltf')
