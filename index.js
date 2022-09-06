'use strict'

import { buildSchema } from 'graphql'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
// const { graphql, buildSchema } = require('graphql')

const app = express()
const port = process.env.port || 3000

// schema definition
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// resolvers config
const resolvers = {
  hello: () => {
    return 'Hello World'
  },
}

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
