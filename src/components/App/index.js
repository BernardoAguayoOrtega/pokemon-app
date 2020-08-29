//import react 
import React from 'react'
//import apllo client
import ApolloClient from 'apollo-boost'
//import APOLLO PROVIDER
import { ApolloProvider } from '@apollo/react-hooks'
//import pokemons container
import { PokemonsContainer } from './containers/PokemonsContainer'

const App = (props) => {
//create Apollo client
const client = new ApolloClient({
	uri: 'https://graphql-pokemon.now.sh'
})

	return (
	<AppolloProvider client={client}>
		<main>
			<PokemonsContainer />
		</main>
	</ApolloProvider>
)
}

//export app
export { App }
