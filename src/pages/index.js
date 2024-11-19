import dynamic from 'next/dynamic'

const ThreeContainer = dynamic(() => import('../components/3D/ThreeContainer'), {
  ssr: false
})

export default function Home() {
  return (
    <main>
      <ThreeContainer />
    </main>
  )
}
