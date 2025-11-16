import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { COURSE_DATA } from './constants';
import CourseSidebar from './components/CourseSidebar';
import LessonView from './components/LessonView';
import Header from './components/Header';
import { type Lesson } from './types';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState<string>(() => {
    try {
      const item = window.localStorage.getItem('activeLessonId');
      return item ? JSON.parse(item) : '1.1.1';
    } catch (error) {
      console.error("Failed to parse activeLessonId from localStorage", error);
      return '1.1.1';
    }
  });
  
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    try {
      const item = window.localStorage.getItem('completedLessons');
      return item ? new Set(JSON.parse(item)) : new Set();
    } catch (error) {
      console.error("Failed to parse completedLessons from localStorage", error);
      return new Set();
    }
  });

  const [userScore, setUserScore] = useState<number>(() => {
    try {
      const item = window.localStorage.getItem('userScore');
      return item ? JSON.parse(item) : 0;
    } catch (error) {
      console.error("Failed to parse userScore from localStorage", error);
      return 0;
    }
  });

  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    try {
      const item = window.localStorage.getItem('answers');
      return item ? JSON.parse(item) : {};
    } catch (error) {
      console.error("Failed to parse answers from localStorage", error);
      return {};
    }
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      window.localStorage.setItem('activeLessonId', JSON.stringify(activeLessonId));
    } catch (error) {
      console.error("Failed to save activeLessonId to localStorage", error);
    }
  }, [activeLessonId]);

  useEffect(() => {
    try {
      window.localStorage.setItem('completedLessons', JSON.stringify(Array.from(completedLessons)));
    } catch (error) {
      console.error("Failed to save completedLessons to localStorage", error);
    }
  }, [completedLessons]);

  useEffect(() => {
    try {
      window.localStorage.setItem('userScore', JSON.stringify(userScore));
    } catch (error) {
      console.error("Failed to save userScore to localStorage", error);
    }
  }, [userScore]);

  useEffect(() => {
    try {
      window.localStorage.setItem('answers', JSON.stringify(answers));
    } catch (error) {
      console.error("Failed to save answers to localStorage", error);
    }
  }, [answers]);

  const { allLessons, totalPoints } = useMemo(() => {
    const lessons: Lesson[] = [];
    let points = 0;
    COURSE_DATA.forEach(level => 
      level.modules.forEach(module => 
        module.lessons.forEach(lesson => {
          lessons.push(lesson);
          lesson.questions.forEach(q => points += q.points);
        })
      )
    );
    return { allLessons: lessons, totalPoints: points };
  }, []);

  const filteredCourseData = useMemo(() => {
    if (!searchQuery) {
      return COURSE_DATA;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return COURSE_DATA.map(level => {
      const filteredModules = level.modules.map(module => {
        const filteredLessons = module.lessons.filter(lesson => 
          lesson.title.toLowerCase().includes(lowerCaseQuery) || 
          lesson.content.toLowerCase().includes(lowerCaseQuery)
        );
        return { ...module, lessons: filteredLessons };
      }).filter(module => module.lessons.length > 0);
      return { ...level, modules: filteredModules };
    }).filter(level => level.modules.length > 0);
  }, [searchQuery]);

  const activeLesson = useMemo(() => {
    return allLessons.find(l => l.id === activeLessonId);
  }, [activeLessonId, allLessons]);
  
  const currentIndex = useMemo(() => {
    return allLessons.findIndex(l => l.id === activeLessonId);
  }, [activeLessonId, allLessons]);

  const isFirstLesson = currentIndex === 0;
  const isLastLesson = currentIndex === allLessons.length - 1;

  const handleSelectLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
  };

  const handleNextLesson = useCallback(() => {
    if (!activeLesson) return;

    const allQuestionsAnswered = activeLesson.questions.every(q => answers[q.id]);
    if (allQuestionsAnswered) {
      setCompletedLessons(prev => new Set(prev).add(activeLesson.id));
      
      if (currentIndex < allLessons.length - 1) {
        setActiveLessonId(allLessons[currentIndex + 1].id);
      }
    }
  }, [activeLesson, answers, allLessons, currentIndex]);

  const handlePreviousLesson = useCallback(() => {
    if (currentIndex > 0) {
      setActiveLessonId(allLessons[currentIndex - 1].id);
    }
  }, [allLessons, currentIndex]);

  const handleAnswer = (questionId: string, answer: string, points: number) => {
    if (!answers[questionId]) {
      setAnswers(prev => ({ ...prev, [questionId]: answer }));
      setUserScore(prev => prev + points);
    }
  };

  const handleResetProgress = useCallback(() => {
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser toute votre progression ? Cette action est irréversible.')) {
      setActiveLessonId('1.1.1');
      setCompletedLessons(new Set());
      setUserScore(0);
      setAnswers({});
      setSearchQuery('');
    }
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-900">
      <Header 
        completedCount={completedLessons.size} 
        totalCount={allLessons.length} 
        score={userScore}
        totalPoints={totalPoints}
        onReset={handleResetProgress}
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <div className="flex flex-1 overflow-hidden">
        <CourseSidebar 
          courseData={filteredCourseData}
          activeLessonId={activeLessonId}
          completedLessons={completedLessons}
          onSelectLesson={handleSelectLesson}
          searchQuery={searchQuery}
          allLessons={allLessons}
        />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          {activeLesson ? (
            <LessonView 
              key={activeLesson.id}
              lesson={activeLesson}
              onNext={handleNextLesson}
              onPrevious={handlePreviousLesson}
              onAnswer={handleAnswer}
              userAnswers={answers}
              isFirst={isFirstLesson}
              isLast={isLastLesson}
              userScore={userScore}
              totalPoints={totalPoints}
              onReset={handleResetProgress}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-2xl text-gray-500">Sélectionnez une leçon pour commencer.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;