import { Header } from '../components/Header'
import { StudentSideBar } from '../components/StudentSideBar'
import { CardProfile } from '../components/CardProfile'
import welcome_student_character from '../assets/welcome_student_character.svg'

export function StudentPage() {
  const path = window.location.pathname.split('/').pop();
  console.log(path);
  return (
    <>
        <Header />
      <div className='flex flex-row'>
        <StudentSideBar />
        <div className='w-full flex flex-col bg-slate-200'>
          <div className='h-full'>
            <CardProfile role={path}/>
            {/* <div className='w-80 h-fit bg-slate-700'>
              <img src={welcome_student_character} alt="" />
            </div> */}
          </div>
        </div>

      </div>
    </>
  )
}
