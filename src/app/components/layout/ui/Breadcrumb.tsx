"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  separator?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex gap-3">
        <li className="breadcrumb-item">
          <Link href="/" className='text-blue-500'>Página Inicial</Link>
        </li>
        {pathArray.map((path, index) => {
          const href = '/' + pathArray.slice(0, index + 1).join('/');
          return (
            <li key={href} className="">
              <Link href={href}><span className='capitalize'>{path}</span></Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};