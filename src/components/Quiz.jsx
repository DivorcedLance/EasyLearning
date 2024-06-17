import { useState } from 'react';
import Question from './Question';

const questions = [
  {
    question: '¿Cuál de los siguientes enunciados describe correctamente un postulado de la relatividad especial?',
    options: [
      'A. La velocidad de la luz depende del movimiento del observador.',
      'B. Las leyes de la física son las mismas para todos los observadores no acelerados.',
      'C. La masa de un objeto aumenta con su velocidad.',
      'D. El tiempo es absoluto y el mismo para todos los observadores.',
    ],
    correctAnswer: 'B. Las leyes de la física son las mismas para todos los observadores no acelerados.',
  },
  {
    question: '¿Qué describe la relatividad general?',
    options: [
      'A. La interacción entre partículas subatómicas.',
      'B. La fuerza electromagnética.',
      'C. La gravedad como una curvatura del espacio-tiempo.',
      'D. La teoría de los quarks.',
    ],
    correctAnswer: 'C. La gravedad como una curvatura del espacio-tiempo.',
  },
  {
    question: '¿Cuál es el nombre del científico que desarrolló la teoría de la relatividad?',
    options: [
      'A. Albert Einstein',
      'B. Isaac Newton',
      'C. Niels Bohr',
      'D. Galileo Galilei',
    ],
    correctAnswer: 'A. Albert Einstein',
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0)
  const puntos = 100/questions.length;

  const handleAnswer = (isCorrect) => {
    setScore((prevScore) => prevScore + (isCorrect ? puntos : 0));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz finished
      const finalScore = isCorrect ? score + puntos : score;
      alert(`Quiz terminado! Su puntaje es: ${finalScore} %`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Pregunta {currentQuestionIndex + 1}</h2>
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        correctAnswer={questions[currentQuestionIndex].correctAnswer}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
