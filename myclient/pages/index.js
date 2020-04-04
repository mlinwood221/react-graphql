import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import fetch from "node-fetch";
import { ApolloProvider, graphql } from "react-apollo";

const client = new ApolloClient({
  link: createHttpLink({
    // Replace this with your Graphcool server URL
    uri: "https://api.graph.cool/simple/v1/cjc2uk4kx0vzo01603rkov391",
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});

const MY_QUERY = gql`
  {
    allPosts {
      id
      description
      imageUrl
    }
  }
`;

const Home = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const HomeWithData = graphql(MY_QUERY)(Home);

const App = () => (
  <ApolloProvider client={client}>
    <HomeWithData />
  </ApolloProvider>
);

export default App;
