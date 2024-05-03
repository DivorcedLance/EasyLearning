
export function CardProfile() {
  return (
    <>
        <div className="flex justify-between items-center h-3/6 w-2/5 bg-zinc-300 p-56">
            <div className="flex flex-col justify-center items-center">
                <div className="w-72 mb-5">
                    <img src="/img/profile.png" alt="" className="object-cover"/>
                </div>
                <div className=" text-black font-bold text-center">
                    <h2>GUZMÁN FLORES, PATRIK HAROLD</h2>
                </div>
            </div>
            <div className="flex flex-col text-3xl">
                <div className="mb-5">
                    <label>Grado:</label>
                    <label>4to</label>
                </div>
                <div className="mb-5">
                    <label>Sección:</label>
                    <label>"B"</label>
                </div>
                <div className="mb-5">
                    <label>Sexo:</label>
                    <label>Masculino</label>
                </div>
                <div className="mb-5">
                    <label>Edad:</label>
                    <label>10 años</label>
                </div>
                <div className="mb-5">
                    <label>Tutor:</label>
                    <label>Pablo, Luna Lunera</label>
                </div>
                <div className="text-blue-700">
                    <a href="#">Cambiar contraseña</a>

                </div>
            </div>
        </div>
    </>
  )
}
