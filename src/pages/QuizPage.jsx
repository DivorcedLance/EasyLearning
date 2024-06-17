import '../App.css';
import Quiz from '../components/Quiz'

export function QuizPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center translate-y-20">
      <h1 className='text-5xl font-bold' className='text-5xl pb-4'>Quiz</h1>
      <Quiz />
    </div>
  )
}
