import { GetStaticProps } from 'next'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { MapProps } from 'models'

import HomeTemplate from 'Templates/Home'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
