import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'

// eslint-disable-next-line prettier/prettier
//a função dynamic serve para importar lib que não usa server side rendering
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  )
}
