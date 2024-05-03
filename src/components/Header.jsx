import { SchoolHeader } from "./SchoolHeader";
import { SchoolHeader } from "./SchoolHeader";

export function Header() {
  return (
    <>
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center h-48">
                <div className="w-72">
                    <img className='object-cover' src="/img/TESIS_1.png" alt="Logo de la Secretaría de Educación de Bogotá" />
                </div>
                <label>easy learning</label>
            </div>
        </div>
        <SchoolHeader/>
        <label className='text-center italic font-bold'>--IEP. Maria Montesori. Ugel 06. ATE --</label>
    </>
  )
}
