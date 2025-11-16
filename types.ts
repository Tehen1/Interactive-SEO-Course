
export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
  points: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  content: string; // Markdown or simple text
  questions: Question[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Level {
  id: number;
  title: string;
  duration: string;
  description: string;
  modules: Module[];
}
