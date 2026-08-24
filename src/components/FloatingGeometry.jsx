import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, color, speed = 1, distort = 0.3, geometry = 'box' }) {
  const mesh = useRef()

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.2
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  const getGeometry = () => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />
      case 'octahedron':
        return <octahedronGeometry args={[1]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1]} />
      case 'icosahedron':
        return <icosahedronGeometry args={[1]} />
      case 'cone':
        return <coneGeometry args={[1, 2, 32]} />
      case 'torusKnot':
        return <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
      default:
        return <boxGeometry args={[1, 1, 1]} />
    }
  }

  return (
    <mesh ref={mesh} position={position}>
      {getGeometry()}
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={distort}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

export default function FloatingGeometry() {
  const shapes = useMemo(() => [
    { position: [-3, 2, -2], color: '#7c3aed', speed: 0.8, distort: 0.4, geometry: 'torus' },
    { position: [3, -1, -3], color: '#06b6d4', speed: 1.2, distort: 0.3, geometry: 'octahedron' },
    { position: [-2, -2, -1], color: '#f43f5e', speed: 0.6, distort: 0.5, geometry: 'dodecahedron' },
    { position: [2, 3, -4], color: '#10b981', speed: 1, distort: 0.2, geometry: 'icosahedron' },
    { position: [0, -3, -2], color: '#f59e0b', speed: 0.9, distort: 0.35, geometry: 'cone' },
    { position: [-4, 0, -3], color: '#ec4899', speed: 1.1, distort: 0.45, geometry: 'torusKnot' },
    { position: [4, 1, -2], color: '#8b5cf6', speed: 0.7, distort: 0.3, geometry: 'box' },
  ], [])

  return (
    <group>
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </group>
  )
}
