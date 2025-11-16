import React, { useState, useEffect, useMemo } from 'react';
import { type Level, type Lesson } from '../types';
import { ChevronDownIcon, CheckCircleIcon, LockClosedIcon } from './icons';

interface CourseSidebarProps {
  courseData: Level[];
  activeLessonId: string;
  completedLessons: Set<string>;
  onSelectLesson: (lessonId: string) => void;
  searchQuery: string;
  allLessons: Lesson[];
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ courseData, activeLessonId, completedLessons, onSelectLesson, searchQuery, allLessons }) => {
  const [openLevels, setOpenLevels] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (searchQuery) {
      setOpenLevels(new Set(courseData.map(level => level.id)));
    } else {
      // Keep the current level open, default to 1 if no active lesson
      const activeLesson = allLessons.find(l => l.id === activeLessonId);
      const activeLevelId = activeLesson ? parseInt(activeLesson.id.split('.')[0], 10) : 1;
      if (!openLevels.has(activeLevelId)) {
         setOpenLevels(prev => new Set(prev).add(activeLevelId));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, courseData, activeLessonId, allLessons]);

  const lastCompletedIndex = useMemo(() => {
    let maxIndex = -1;
    allLessons.forEach((lesson, index) => {
      if (completedLessons.has(lesson.id)) {
        maxIndex = Math.max(maxIndex, index);
      }
    });
    return maxIndex;
  }, [allLessons, completedLessons]);

  const toggleLevel = (levelId: number) => {
    setOpenLevels(prev => {
      const newSet = new Set(prev);
      if (newSet.has(levelId)) {
        newSet.delete(levelId);
      } else {
        newSet.add(levelId);
      }
      return newSet;
    });
  };

  return (
    <aside className="w-80 bg-base-800 border-r border-white/10 flex-shrink-0 overflow-y-auto hidden md:block">
      <nav className="p-4">
        {courseData.length > 0 ? courseData.map(level => (
          <div key={level.id} className="mb-4">
            <button 
              onClick={() => toggleLevel(level.id)}
              className="w-full flex justify-between items-center p-3 rounded-lg text-left font-bold text-white hover:bg-white/5 transition-colors"
              aria-expanded={openLevels.has(level.id)}
            >
              <span>Niveau {level.id}: {level.title}</span>
              <ChevronDownIcon className={`w-5 h-5 transition-transform ${openLevels.has(level.id) ? 'rotate-180' : ''}`} />
            </button>
            {openLevels.has(level.id) && (
              <div className="mt-2 pl-4 border-l border-white/10">
                {level.modules.map(module => (
                  <div key={module.id} className="mb-2">
                    <h4 className="font-semibold text-gray-400 px-2 py-1 text-sm">{module.title}</h4>
                    <ul>
                      {module.lessons.map(lesson => {
                        const lessonIndex = allLessons.findIndex(l => l.id === lesson.id);
                        const isLocked = lessonIndex > lastCompletedIndex + 1;

                        return (
                          <li key={lesson.id}>
                            <button
                              onClick={() => onSelectLesson(lesson.id)}
                              disabled={isLocked}
                              className={`w-full text-left px-2 py-2 rounded-md flex items-center space-x-3 transition-colors text-sm ${
                                activeLessonId === lesson.id 
                                  ? 'bg-brand-primary text-white font-semibold' 
                                  : isLocked 
                                  ? 'text-gray-500 cursor-not-allowed'
                                  : 'text-gray-300 hover:bg-white/10'
                              }`}
                            >
                              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                {isLocked ? (
                                  <LockClosedIcon className="w-5 h-5 text-gray-500" />
                                ) : completedLessons.has(lesson.id) ? (
                                  <CheckCircleIcon className="w-5 h-5 text-brand-primary" />
                                ) : (
                                  <div className={`w-4 h-4 rounded-full border-2 ${activeLessonId === lesson.id ? 'border-white bg-white/30' : 'border-gray-500'}`}></div>
                                )}
                              </div>
                              <span>{lesson.title}</span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )) : (
          <div className="p-4 text-center text-gray-400">
            Aucune leçon trouvée.
          </div>
        )}
      </nav>
    </aside>
  );
};

export default CourseSidebar;