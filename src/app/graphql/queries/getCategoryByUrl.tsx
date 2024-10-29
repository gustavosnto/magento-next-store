import { gql } from '@apollo/client';
export const GET_CATEGORY_BY_URL = gql`
  query GetCategoryByUrl($url_key: String!) {
    categoryList(filters: { url_key: { eq: $url_key } }) {
      id
      name
      url_key
      products {
        items {
          sku
          name
          thumbnail {
            url
          }
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
            }
          }
        }
      }
      children {
        id
        name
        url_key
        products {
          items {
            sku
            name
            thumbnail {
              url
            }
            price_range {
              minimum_price {
                regular_price {
                  value
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
query {
  categories {
    items {
      id
      name
      url_key
      children {
        id
        name
        url_key
      }
    }
  }
}
`;