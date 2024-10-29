import { createApolloClient } from '../../apollo-client';
import { ProductItem } from './components/layout/ui/Products/ProductItem';
import { GET_PRODUCTS } from './graphql/queries/getUseProducts';
import { GET_CATEGORIES } from './graphql/queries/getCategoryByUrl';
import Link from 'next/link';

interface Product {
  sku: string;
  name: string;
  thumbnail?: {
    url: string;
  };
  price_range: {
    minimum_price: {
      regular_price: {
        value: number;
        currency: string;
      };
    };
  };
}

interface Category {
  id: number;
  name: string;
  url_key: string;
  children?: Category[];
}

export default async function Home() {
  const client = createApolloClient();
  
  const { data: productData } = await client.query({
    query: GET_PRODUCTS,
  });
  const products: Product[] = productData.products.items;

  const { data: categoryData } = await client.query({
    query: GET_CATEGORIES,
  });
  const categories: Category[] = categoryData.categories.items;

  return (
    <>
      <div className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full md:w-3/12">
              <h2 className="text-xl font-bold mb-4">Categorias</h2>
              <ul className="space-y-2">
                {categories.map((category: Category) => (
                  <li key={category.id}>
                    <Link href={`/categoria/${category.url_key}`} className="text-blue-600 hover:underline"></Link>
                    {category.children && (
                      <ul className="space-y-2">
                        {category.children.map((child: Category) => (
                          <li key={child.id}>
                            <Link href={`/categoria/${child.url_key}`} className="text-blue-500 hover:underline">
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-9/12">
              <h2 className="text-2xl font-bold mb-6">Nossos Produtos</h2>
              <ul className="grid-master">
                {products.map((product: Product) => (
                  <ProductItem key={product.sku} product={product} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
