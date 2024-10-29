import { GET_CATEGORY_BY_URL } from '@/app/graphql/queries/getCategoryByUrl';
import { createApolloClient } from '../../../../apollo-client';
import { Breadcrumb } from '@/app/components/layout/ui/Breadcrumb';
import { ProductItem } from '@/app/components/layout/ui/Products/ProductItem';
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
  products: {
    items: Product[];
  };
  children?: Category[];
}

export default async function CategoryPage({
  params: rawParams,
  searchParams: rawSearchParams,
}: {
  params: Promise<{ url_key: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const client = createApolloClient();

  // Aguarde os parâmetros para extrair seus valores
  const params = await rawParams;
  const searchParams = await rawSearchParams;
  const currentPage = parseInt(searchParams.page || '1', 10);
  const itemsPerPage = 12;

  try {
    const { data } = await client.query({
      query: GET_CATEGORY_BY_URL,
      variables: { url_key: params.url_key },
    });

    const fetchedCategory: Category = data.categoryList[0];

    if (!fetchedCategory) {
      return (
        <div className="py-10">
          <div className="container">
            <p className="text-center text-2xl">Categoria não encontrada</p>
          </div>
        </div>
      );
    }

    const allProducts: Product[] = [
      ...fetchedCategory.products.items,
      ...(fetchedCategory.children?.flatMap((child: Category) => child.products.items) || []),
    ];

    const totalPages = Math.ceil(allProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="container">
        <div>
          <header className="px-3">
            <h1 className="text-3xl font-bold mb-3">Produtos sobre: {fetchedCategory.name}</h1>
          </header>
          <div className="p-3 rounded bg-zinc-100 mb-4">
            <Breadcrumb />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-9">
          <div className="w-full md:w-3/12"></div>
          <div className="w-full md:w-9/12">
            {currentProducts.length > 0 ? (
              <ul className="grid-master">
                {currentProducts.map((product) => (
                  <ProductItem key={product.sku} product={product} />
                ))}
              </ul>
            ) : (
              <span className="text-center text-gray-500">Não há produtos nesta categoria</span>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                <Link
                  href={`/categoria/${params.url_key}?page=${currentPage - 1}`}
                  passHref
                  className={`px-4 py-2 mx-2 bg-gray-200 rounded ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Anterior
                </Link>
                <span className="px-4 py-2 mx-2">
                  Página {currentPage} de {totalPages}
                </span>
                <Link
                  href={`/categoria/${params.url_key}?page=${currentPage + 1}`}
                  passHref
                  className={`px-4 py-2 mx-2 bg-gray-200 rounded ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Próxima
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Erro ao buscar a categoria:', error);
    return (
      <div className="py-10">
        <div className="container">
          <p className="text-center text-2xl">Erro ao carregar a categoria</p>
        </div>
      </div>
    );
  }
}