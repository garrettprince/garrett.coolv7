import dynamic from 'next/dynamic'
import ClientOnly from './ClientOnly'

// Dynamically import Canvas with no SSR
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), {
  ssr: false
})

export default function ThreeContainer() {
  return (
    <ClientOnly>
      <Canvas>
        {/* Your 3D content here */}
      </Canvas>
    </ClientOnly>
  )
}