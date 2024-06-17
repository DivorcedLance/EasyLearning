import notificationIcon from '../assets/notification_icon.svg'
import default_avatar from '../assets/default_avatar.svg'
import test_icon from '../assets/test_icon.svg'
import courses_icon from '../assets/courses_icon.svg'

import { AsideButton } from './AsideButton'

export function TeacherSideBar({onButtonClick}) {
  return (
    <aside className="w-96">
      <nav className="flex flex-col gap-4 h-full bg-[#D7E897]">
        <div className="flex flex-col bg-[#96919100] text-white font-bold text-center items-center justify-center gap-4 w-96 h-fit">
          <img src={default_avatar} alt="" className="w-2/5 mt-5" />
          <div className="flex flex-col">
            <h2>Napoleon Alva, Jorge</h2>
            <p className="flex justify-center items-center">
              Sin mensajes
              <img src={notificationIcon} alt="" />
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          <AsideButton icon={test_icon} label="Datos" onClick={() => onButtonClick('datos')} />
          <AsideButton icon={courses_icon} label="Cursos" onClick={() => onButtonClick('cursos')}/>
        </ul>
      </nav>
    </aside>
  )
}
