import { DefaultSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'models'

// eslint-disable-next-line prettier/prettier
//a função dynamic serve para importar lib que não usa server side rendering
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <DefaultSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips-nine-smoky.vercel.app/"
        openGraph={{
          url: 'https://my-trips-nine-smoky.vercel.app/',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips-nine-smoky.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
