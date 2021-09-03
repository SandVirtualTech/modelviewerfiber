import React, { useRef, useState} from 'react'
import { Canvas, useFrame} from '@react-three/fiber'


function Box(props) {
  // This reference will give us direct access to the mesh
  const ref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01
  })
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(e) => {setActive(!active); console.log()}}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function SceneBox(props) {
  // This reference will give us direct access to the mesh

  return (
    <mesh
    name="SceneCube">
      <boxGeometry args={[50, 50, 50]} />
      <meshStandardMaterial color='#0F1F3F' metalness={0} roughness={0.5} side={1}/>
    </mesh>
  )
}

export default function ModelViewer() {
  return (
    <div className='modelViewer'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10,10,10]} angle={0.10} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <SceneBox />
        <Box name = "Box A" />
      </Canvas>
    </div>
  )
}