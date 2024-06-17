import { useState } from 'react';

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onAnswer(option === correctAnswer);
  };

  return (
    <div className="question-container">
      <h3>{question}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          className={`option-button ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
          disabled={selectedOption !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
