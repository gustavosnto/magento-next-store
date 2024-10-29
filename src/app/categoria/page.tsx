import Link from 'next/link';
import { createApolloClient } from "../../../apollo-client";
import { Breadcrumb } from "../components/layout/ui/Breadcrumb";
import { GET_CATEGORIES } from "../graphql/queries/getCategoryByUrl";

interface SubCategory {
  id: number;
  name: string;
  url_key: string;
}

interface Category {
  id: number;
  name: string;
  url_key: string;
  children?: SubCategory[];
}

export default async function Page() {
  const client = createApolloClient();

  const { data } = await client.query<{ categories: { items: Category[] } }>({
    query: GET_CATEGORIES,
  });

  const categories: Category[] = data.categories.items;

  return (
    <>
      <div>
        <div className="container">
          <div>
            <header className="px-3">
              <h1 className="text-3xl font-bold mb-3">Categorias</h1>
            </header>
            <div className="p-3 rounded bg-zinc-100 mb-4">
              <Breadcrumb />
            </div>
          </div>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <strong>{category.name}</strong>
                {category.children && (
                  <ul>
                    {category.children.map((child) => (
                      <li key={child.id}>
                        <Link href={`/categoria/${child.url_key}`}>
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
      </div>
    </>
  );
}