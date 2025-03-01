import Link from 'next/link';
import { BookmarkIcon } from 'lucide-react';
import { formatRelativeTime, truncateText } from '@/app/lib/utils/formatters';
import { UseCase, Category, Company } from '@/app/lib/api/types';

interface UseCaseCardProps {
  useCase: Omit<UseCase, 'content'> & {
    category?: Pick<Category, 'id' | 'name' | 'icon'>;
    company?: Pick<Company, 'id' | 'name'>;
  };
  isBookmarked?: boolean;
  onBookmark?: (id: number) => void;
}

export function UseCaseCard({ useCase, isBookmarked = false, onBookmark }: UseCaseCardProps) {
  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBookmark) {
      onBookmark(useCase.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/use-cases/${useCase.id}`}>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              {useCase.title}
            </h3>
            <button
              onClick={handleBookmarkClick}
              className="text-gray-400 hover:text-blue-500 p-1"
              aria-label={isBookmarked ? "ブックマークから削除" : "ブックマークに追加"}
            >
              <BookmarkIcon size={18} className={isBookmarked ? "fill-blue-500 text-blue-500" : ""} />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-3">
            {truncateText(useCase.description, 120)}
          </p>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              {useCase.category && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                  {useCase.category.icon && (
                    <span className="mr-1">{useCase.category.icon}</span>
                  )}
                  {useCase.category.name}
                </span>
              )}
              {useCase.company && (
                <span className="text-xs text-gray-500">
                  {useCase.company.name}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-400">
              {formatRelativeTime(useCase.createdAt)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
