import { useEffect, useState } from 'react'
import { MarkDownDisplay } from './MarkDownDisplay'

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isWaiting, setIsWaiting] = useState(false)

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsWaiting(true)
  }

  useEffect(() => {
    let timer
    if (isWaiting) {
      timer = setTimeout(() => {
        setSelectedOption(null)
        setIsWaiting(false) // Termina el estado de espera
        onAnswer(selectedOption === correctAnswer)
      }, 1000)
    }

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer)
  }, [isWaiting, selectedOption, correctAnswer, onAnswer])

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
                : option === selectedOption
                ? 'bg-red-600'
                : 'bg-gray-200'
              : 'bg-gray-200'
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
