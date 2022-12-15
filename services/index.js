import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_OPENLMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Authors {
      postsConnection {
        edges {
          node {
            author {
              name
              bio
              id
              photo {
                url
              }
            }
            createdAt
            slug
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
