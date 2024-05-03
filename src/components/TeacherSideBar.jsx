import notificationIcon from '../assets/notification_icon.svg'
import default_avatar from '../assets/default_avatar.svg'
import test_icon from '../assets/test_icon.svg'
import courses_icon from '../assets/courses_icon.svg'

import { AsideButton } from './AsideButton'

export function TeacherSideBar() {
  return (
    <aside className="w-96">
      <nav className="flex flex-col gap-4 h-max">
        <ul className="flex flex-col gap-4">
          <AsideButton icon={test_icon} label="Datos" />
          <AsideButton icon={courses_icon} label="Cursos" />
        </ul>
        <div className="bg-[#969191] text-white font-bold text-center flex items-center justify-center gap-4 w-96 h-28">
          <img src={default_avatar} alt="" className="w-20" />
          <div className="flex flex-col">
            <h2>Napoleon Alva, Jorge</h2>
            <p className="flex justify-center items-center">
              Sin mensajes
              <img src={notificationIcon} alt="" />
            </p>
          </div>
        </div>
      </nav>
    </aside>
  )
}
