import Link from 'next/link';

interface CategoryProps {
  category: {
    id: number;
    name: string;
    icon: string;
    description: string;
  };
}

export function CategoryCard({ category }: CategoryProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl mb-2">{category.icon}</div>
          <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
