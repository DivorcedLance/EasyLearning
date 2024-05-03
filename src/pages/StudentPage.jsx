import { Header } from '../components/Header'
import { StudentSideBar } from '../components/StudentSideBar'
import { CardProfile } from '../components/CardProfile'
import welcome_student_character from '../assets/welcome_student_character.svg'

export function StudentPage() {
  return (
    <>
        <Header />
      <div className='flex flex-row'>
        <StudentSideBar />
        <main className='bg-cyan-100 w-full'>
            <CardProfile />
            <img src={welcome_student_character} alt="" />
          </main>

      </div>
    </>
  )
}
