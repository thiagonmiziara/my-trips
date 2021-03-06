import { GraphQLClient } from 'graphql-request'

const endPoint = process.env.ENDPOINT_URL || ''

const client = new GraphQLClient(endPoint, {
  headers: {
    get: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
