import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import { setContext } from 'apollo-link-context';

Vue.use(VueApollo)

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://gis-api.aiesec.org/graphql',
})
const token = "e316ebe109dd84ed16734e5161a2d236d0a7e6daf499941f7c110078e3c75493"

const middlewareLink = setContext(() => ({
  headers: {
    authorization: `${token}`
  }
}));
const link = middlewareLink.concat(httpLink);

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
})
export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
