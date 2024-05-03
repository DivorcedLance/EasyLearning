
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
        <header className='flex flex-row-reverse justify-between items-center p-0 bg-green-400'>
            <h1>EDUCA</h1>
            <img className='object-cover' src="/img/escudoCole.png" alt="Logo de la Secretaría de Educación de Bogotá" />
        </header>
    </>
  )
}
