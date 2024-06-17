import { useEffect, useState } from 'react';
import { MarkDownDisplay } from './MarkDownDisplay';
import correcto from '../assets/sonido_pregunta.mp3';
import incorrecto from '../assets/wrong.mp3';

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [option, setOption] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);

  const playSound = (isCorrect) => {
    const audio = new Audio(isCorrect ? correcto : incorrecto);
    audio.play();
  };

  const handleOptionClick = (o) => {
    setOption(o);
    setSelectedOption(option);
    setIsWaiting(true);
  };
  
  useEffect(() => {
    let timer;
    if (isWaiting) {
      const isCorrect = option === correctAnswer;
      playSound(isCorrect);
      timer = setTimeout(() => {
        setSelectedOption(null);
        setIsWaiting(false); // Termina el estado de espera
        onAnswer(option === correctAnswer);
      }, 1000);
    }

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [isWaiting]);

  return (
    <div className="w-full">
      <MarkDownDisplay markdown={question} />
      {options.map((option, index) => (
        <button
          key={index}
          className={`option-button ${selectedOption === option ? 'bg-slate-500' : ''}  `}
          onClick={() => handleOptionClick(option)}
          
        >
          <MarkDownDisplay markdown={option} />
        </button>
      ))}
    </div>
  );
};

export default Question;
