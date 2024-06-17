import notificationIcon from '../assets/notification_icon.svg'
import default_avatar from '../assets/default_avatar.svg'
import test_icon from '../assets/test_icon.svg'
import semanal_test_icon from '../assets/semanal_test_icon.svg'
import homework_icon from '../assets/homework_icon.svg'
import reinforcement_icon from '../assets/reinforcement_icon.svg'

import { AsideButton } from '../components/AsideButton'

export function StudentSideBar() {
  return (
    <aside className="w-96">
      <nav className="flex flex-col gap-4 h-max">
        <ul className="flex flex-col gap-4">
          <AsideButton icon={test_icon} label="Test" />
          <AsideButton icon={semanal_test_icon} label="Prueba Semanal" />
          <AsideButton icon={homework_icon} label="Tarea en casa" />
          <AsideButton
            icon={reinforcement_icon}
            label="Evaluación de reforzamiento"
          />
        <div className="bg-[#969191] text-white font-bold text-center flex items-center justify-center gap-4 w-96 h-48">
          <img src={default_avatar} alt="" className="w-20" />
          <div className="flex flex-col">
            <h2>PATRICK GUZMAN</h2>
            <p className="flex justify-center items-center">
              Sin mensajes
              <img src={notificationIcon} alt="" />
            </p>
          </div>
        </div>
        </ul>
      </nav>
    </aside>
  )
}
