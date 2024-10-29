import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products(search: "") {
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
`;