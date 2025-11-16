import React from 'react';
import { type Lesson } from '../types';
import Quiz from './Quiz';

interface LessonViewProps {
  lesson: Lesson;
  onNext: () => void;
  onPrevious: () => void;
  onAnswer: (questionId: string, answer: string, points: number) => void;
  userAnswers: Record<string, string>;
  isFirst: boolean;
  isLast: boolean;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onNext, onPrevious, onAnswer, userAnswers, isFirst, isLast }) => {
  const allQuestionsAnswered = lesson.questions.every(q => userAnswers[q.id]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-base-800 p-8 rounded-xl shadow-2xl border border-white/10">
        <div className="mb-6 pb-4 border-b border-white/10">
          <h2 className="text-3xl font-bold text-white">{lesson.title}</h2>
          <p className="text-gray-400 mt-1">Durée estimée: {lesson.duration} minutes</p>
        </div>
        
        <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white mb-8">
          <p>{lesson.content}</p>
        </div>

        {lesson.questions.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quiz Interactif</h3>
            <Quiz 
              questions={lesson.questions}
              onAnswer={onAnswer}
              userAnswers={userAnswers}
            />
          </div>
        )}
        
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 disabled:bg-base-900/50 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            Leçon Précédente
          </button>
          <button
            onClick={onNext}
            disabled={!allQuestionsAnswered || isLast}
            className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-lg hover:bg-brand-secondary transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none"
          >
            Leçon Suivante
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonView;