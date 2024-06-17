import { useState } from 'react'
import Question from './Question'

const questions = [
  {
    question: `# ¿Cuál es el resultado de la siguiente operación? $$5 + 3 =$$`,
    options: ['A. 6', 'B. 7', 'C. 8', 'D. 9'],
    correctAnswer: 'C. 8',
  },

  {
    question: `# ¿Cuál de los siguientes números es par?`,
    options: ['A. 3', 'B. 7', 'C. 10', 'D. 11'],
    correctAnswer: 'C. 10',
  },

  {
    question: `# ¿Cuánto es $$4 \\times 6$$?`,
    options: ['A. 20', 'B. 24', 'C. 26', 'D. 28'],
    correctAnswer: 'B. 24',
  },

  {
    question: `# ¿Cuál es el valor de $$\\frac{15}{3}$$?`,
    options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
    correctAnswer: 'C. 5',
  },

  {
    question: `# Observa la siguiente tabla y responde: ¿Cuál es el número que falta en la segunda columna?
| Número | Siguiente número |
|--------|------------------|
| 4      | 5                |
| 6      |                  |
| 8      | 9                |
| 10     | 11               |`,
    options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
    correctAnswer: 'C. 7',
  },
]

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const puntos = 100 / questions.length

  const handleAnswer = (isCorrect) => {
    setScore((prevScore) => prevScore + (isCorrect ? puntos : 0))
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Quiz finished
      const finalScore = isCorrect ? score + puntos : score
      alert(`Quiz terminado! Su puntaje es: ${finalScore} %`)
      setCurrentQuestionIndex(0)
      setScore(0)
    }
  }

  return (
    <div className="w-4/6">
      <h1 className="text-3xl" className='text-3xl'>Pregunta {currentQuestionIndex + 1}</h1>
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        correctAnswer={questions[currentQuestionIndex].correctAnswer}
        onAnswer={handleAnswer}
      />
    </div>
  )
}

export default Quiz
