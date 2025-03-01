import Link from 'next/link';
import { BookmarkIcon, CopyIcon } from 'lucide-react';
import { formatRelativeTime, truncateText } from '@/app/lib/utils/formatters';
import { Prompt, Category } from '@/app/lib/api/types';

interface PromptCardProps {
  prompt: Omit<Prompt, 'content'> & {
    content?: string;
    category?: Pick<Category, 'id' | 'name' | 'icon'>;
  };
  isBookmarked?: boolean;
  onBookmark?: (id: number) => void;
  onCopy?: (content: string) => void;
  showPreview?: boolean;
}

export function PromptCard({ 
  prompt, 
  isBookmarked = false, 
  onBookmark, 
  onCopy,
  showPreview = false 
}: PromptCardProps) {
  
  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBookmark) {
      onBookmark(prompt.id);
    }
  };
  
  const handleCopyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCopy && prompt.content) {
      onCopy(prompt.content);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/prompts/${prompt.id}`}>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              {prompt.title}
            </h3>
            <div className="flex space-x-1">
              {prompt.content && (
                <button
                  onClick={handleCopyClick}
                  className="text-gray-400 hover:text-green-500 p-1"
                  aria-label="プロンプトをコピー"
                >
                  <CopyIcon size={18} />
                </button>
              )}
              <button
                onClick={handleBookmarkClick}
                className="text-gray-400 hover:text-blue-500 p-1"
                aria-label={isBookmarked ? "ブックマークから削除" : "ブックマークに追加"}
              >
                <BookmarkIcon size={18} className={isBookmarked ? "fill-blue-500 text-blue-500" : ""} />
              </button>
            </div>
          </div>
          
          {prompt.description && (
            <p className="text-gray-600 text-sm mb-3">
              {truncateText(prompt.description, 100)}
            </p>
          )}
          
          {showPreview && prompt.content && (
            <div className="bg-gray-50 rounded p-3 mt-3 mb-3 text-sm text-gray-700 font-mono">
              {truncateText(prompt.content, 150)}
            </div>
          )}
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              {prompt.category && (
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                  {prompt.category.icon && (
                    <span className="mr-1">{prompt.category.icon}</span>
                  )}
                  {prompt.category.name}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-400">
              {formatRelativeTime(prompt.createdAt)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
