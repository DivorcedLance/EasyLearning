import { Header } from '../components/Header'
import notificationIcon from '../assets/notification_icon.svg'
import default_avatar from '../assets/default_avatar.svg'
import { AsideButton } from '../components/AsideButton'
import { CardProfile } from '../components/CardProfile'

export function StudentPage() {
  return (
    <>
      <Header />
      <div className='flex h-3/5'>

        <aside className="">
          <nav className="">
            <ul>
              <AsideButton icon="/img/aside_icons/test_icon.svg" label="Test" />
              <AsideButton
                icon="/img/aside_icons/weekly_test_icon.svg"
                label="Prueba Semanal"
              />
              <AsideButton
                icon="/img/aside_icons/homework_icon.svg"
                label="Tarea en casa"
              />
              <AsideButton
                icon="/img/aside_icons/reinforcement_evaluation_icon.svg"
                label="Evaluación de reforzamiento"
              />
            </ul>
          </nav>
          <div>
            <img src={default_avatar} alt="" />
            <div className="bg-[#969191] text-white font-bold text-center">
              <h2>PATRICK GUZMAN</h2>
              <p>Sin mensajes</p>
              <img src={notificationIcon} alt="" />
            </div>
          </div>
        </aside>
        <main className='bg-cyan-100 w-full'>
          <CardProfile />
          
        </main>
      </div>
    </>
  )
}
