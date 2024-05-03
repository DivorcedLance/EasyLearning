import './App.css'
import { StudentPage } from './pages/StudentPage'
import { TeacherPage } from './pages/TeacherPage'
import { LoginPage } from './pages/LoginPage'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path='/student' element={<StudentPage/>} />
        <Route path='/teacher' element={<TeacherPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
