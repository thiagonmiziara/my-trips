import dynamic from 'next/dynamic'

// eslint-disable-next-line prettier/prettier
//a função dynamic serve para importar lib que não usa server side rendering
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return <Map />
}
