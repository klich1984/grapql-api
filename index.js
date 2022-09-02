'use strict'

import { graphql, buildSchema } from 'graphql'
// const { graphql, buildSchema } = require('graphql')

// schema definition
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Run query hello
graphql({ schema: schema, source: '{ hello }' }).then((data) =>
  console.log(data)
)
