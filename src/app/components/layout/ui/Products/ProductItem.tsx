import Image from 'next/image';

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

interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li key={product.sku} className='p-4 bg-white border border-blue-100 rounded-lg shadow-md shadow-blue-50'>
      <div className='aspect-square overflow-hidden mb-4 border rounded-lg'>
        <Image
          src={product.thumbnail?.url || '/placeholder.png'}
          alt={product.name}
          width={500}
          height={500}
          className="mb-4"
        />
      </div>
      <p className='text-base line-clamp-1 mb-2'>
        {product.name}
      </p>
      <span className='block mb-4 text-xl font-bold'>
        R$ {product.price_range.minimum_price.regular_price.value
          .toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>

      <div>
        <button className='p-2 text-xs w-full border border-blue-700 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg'>
          <div className="flex gap-1 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-3 fill-white"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            Adicionar ao carrinho
          </div>
        </button>
      </div>
    </li>
  );
};