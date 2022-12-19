import { request, gql } from "graphql-request";
import Categories from "../Components/Categories";

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
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostsDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
          last: 3
        }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};
