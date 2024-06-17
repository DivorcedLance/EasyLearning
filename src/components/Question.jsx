import { useState } from 'react';
import { MarkDownDisplay } from './MarkDownDisplay';

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onAnswer(option === correctAnswer);
  };

  return (
    <div className="w-full">
      <MarkDownDisplay markdown={question} />
      {options.map((option, index) => (
        <button
          key={index}
          className={`option-button ${selectedOption === option ? 'bg-red-500' : ''}`}
          onClick={() => handleOptionClick(option)}
          
        >
          <MarkDownDisplay markdown={option} />
        </button>
      ))}
    </div>
  );
};

export default Question;
