import React from 'react';
import ProgressBar from './ProgressBar';
import { StarIcon, SearchIcon } from './icons';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
  score: number;
  totalPoints: number;
  onReset: () => void;
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ completedCount, totalCount, score, totalPoints, onReset, searchValue, onSearchChange }) => {
  return (
    <header className="bg-base-800/50 backdrop-blur-sm border-b border-white/10 p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-white shrink-0">
          Cours SEO Interactif
        </h1>
        <div className="flex-1 max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              value={searchValue}
              onChange={onSearchChange}
              className="block w-full bg-base-900/50 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
              placeholder="Rechercher une leçon..."
              aria-label="Rechercher une leçon"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 bg-base-900 px-3 py-1.5 rounded-full">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-white">{score}</span>
            <span className="text-sm text-gray-400">/ {totalPoints} PTS</span>
          </div>
          <button 
            onClick={onReset} 
            className="text-sm text-gray-400 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors"
            title="Réinitialiser la progression du cours"
            aria-label="Réinitialiser la progression du cours"
          >
            Réinitialiser
          </button>
        </div>
      </div>
      <div className="mt-2">
        <ProgressBar current={completedCount} total={totalCount} />
      </div>
    </header>
  );
};

export default Header;