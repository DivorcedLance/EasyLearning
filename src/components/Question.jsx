import { useEffect, useState } from 'react'
import { MarkDownDisplay } from './MarkDownDisplay'

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [option, setOption] = useState(null)
  const [isWaiting, setIsWaiting] = useState(false)

  const handleOptionClick = (o) => {
    setOption(o)
    setIsWaiting(true)
  }

  useEffect(() => {
    let timer
    if (isWaiting) {
      timer = setTimeout(() => {
        setOption(null)
        setIsWaiting(false) // Termina el estado de espera
        onAnswer(option === correctAnswer)
      }, 1000)
    }

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer)
  }, [isWaiting, option, correctAnswer, onAnswer])

  return (
    <div className="w-full">
      <MarkDownDisplay markdown={question} />
      {options.map((option, index) => (
        <button
          disabled={isWaiting}
          key={index}
          className={`option-button ${
            isWaiting
              ? option === correctAnswer
                ? 'bg-lime-600'
                : 'bg-gray-200'
              : 'bg-white'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          <MarkDownDisplay markdown={option} />
        </button>
      ))}
    </div>
  )
}

export default Question
