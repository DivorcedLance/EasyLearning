import { Header } from '../components/Header'
import { StudentSideBar } from '../components/StudentSideBar'
import { CardProfile } from '../components/CardProfile'

export function StudentPage() {
  return (
    <>
        <Header />
      <div className='flex flex-row'>
        <StudentSideBar />
        <main className='bg-cyan-100 w-full'>
            <CardProfile />
            
          </main>

      </div>
    </>
  )
}
