
import { Header } from '../components/Header';
import { TeacherSideBar } from '../components/TeacherSideBar'
import Panel from '../panels/Panel';
import { useState } from 'react';
export default function TeacherManagePage() {
    const path = window.location.pathname.split('/').pop();
    console.log(path);
    const [vista, setVista] = useState('activity_management');
    console.log(vista);
    const handleButtonClick = (view) => {
        setVista(view);
        console.log(vista);
    }
    return (
        <>
        <div className='h-full flex flex-col'>
            {/* Por alguna razon no quiere mostrar las imagenes */}
            <Header />
            <div className='flex-grow flex flex-row'>
                <TeacherSideBar onButtonClick={handleButtonClick} page={'management'}/>
                <div className='w-full flex flex-col'>
                <div className='w-full'>
                    <Panel vista={vista} role={path}/>
                    {/* <div className='w-80 h-fit bg-slate-700'>
                    <img src={welcome_student_character} alt="" />
                    </div> */}
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
