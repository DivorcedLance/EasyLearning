import { Header } from '../components/Header'
import { TeacherSideBar } from '../components/TeacherSideBar'
import { CourseSelector } from '../components/CourseSelector'

export function TeacherPage() {
  return (
    <>
      <Header />
      <div className='flex'>
        <TeacherSideBar />
        <main>
          <CourseSelector />
        </main>
      </div>
    </>
  )
}
