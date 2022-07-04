
import {ApolloServer} from "apollo-server"
import typeDefs from "./schema/type-def.js"
import { resolvers } from "./schema/resolvers.js"



const server = new ApolloServer({typeDefs, resolvers})


server.listen().then(({url})=>{


console.log(`Your server is running! ${url}`)

})

