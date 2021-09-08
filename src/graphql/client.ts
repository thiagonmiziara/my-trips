import { GraphQLClient } from 'graphql-request'

const endPoint = String(process.env.ENDPOINT_URL) || ''

const client = new GraphQLClient(endPoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
