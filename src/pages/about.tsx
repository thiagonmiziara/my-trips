import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'

import AboutTemplate from 'Templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)
  console.log(pages)
  return {
    props: { pages },
    revalidate: 60 * 60 * 24
  }
}
