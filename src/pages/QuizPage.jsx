import '../App.css';
import Quiz from '../components/Quiz'

export function QuizPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center translate-y-20">
      <h1 className='text-5xl font-bold'>Quiz de Relatividad</h1>
      <Quiz />
    </div>
  )
}
