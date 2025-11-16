
import React from 'react';
import { type Question } from '../types';
import { CheckIcon, XIcon } from './icons';

interface QuizProps {
  questions: Question[];
  onAnswer: (questionId: string, answer: string, points: number) => void;
  userAnswers: Record<string, string>;
}

const Quiz: React.FC<QuizProps> = ({ questions, onAnswer, userAnswers }) => {

  const handleSelectOption = (questionId: string, optionText: string) => {
    if (userAnswers[questionId]) return;

    const question = questions.find(q => q.id === questionId);
    if (question) {
      const correctOption = question.options.find(o => o.isCorrect);
      if (correctOption) {
        onAnswer(questionId, optionText, optionText === correctOption.text ? question.points : 0);
      }
    }
  };

  return (
    <div className="space-y-6">
      {questions.map((q, index) => {
        const userAnswer = userAnswers[q.id];
        const correctOption = q.options.find(o => o.isCorrect)?.text;

        return (
          <div key={q.id} className="p-5 bg-base-900/50 rounded-lg border border-white/10">
            <p className="font-semibold text-white mb-3">
              Question {index + 1}: {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option) => {
                const isSelected = userAnswer === option.text;
                const isCorrect = option.isCorrect;
                
                let optionClass = "border-gray-600 hover:border-brand-primary";
                if (userAnswer) {
                  if (isCorrect) {
                    optionClass = "border-green-500 bg-green-500/10 text-white";
                  } else if (isSelected) {
                    optionClass = "border-red-500 bg-red-500/10 text-white";
                  } else {
                     optionClass = "border-gray-700 opacity-60";
                  }
                }

                return (
                  <button
                    key={option.text}
                    onClick={() => handleSelectOption(q.id, option.text)}
                    disabled={!!userAnswer}
                    className={`w-full text-left p-3 border-2 rounded-md transition-all flex justify-between items-center ${optionClass} disabled:cursor-default`}
                  >
                    <span>{option.text}</span>
                    {userAnswer && isSelected && (isCorrect ? <CheckIcon className="w-5 h-5 text-green-500" /> : <XIcon className="w-5 h-5 text-red-500" />)}
                  </button>
                );
              })}
            </div>
            {userAnswer && (
              <div className="mt-3 p-3 bg-base-800 rounded-md text-sm text-gray-300">
                <p><span className="font-bold text-white">Explication :</span> {q.explanation}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;