'use strict'

// import { buildSchema } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { readFileSync } from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'
import resolvers from './lib/resolvers.js'
// const { graphql, buildSchema } = require('graphql')

const app = express()
const port = process.env.port || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// schema definition and reading to file
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
