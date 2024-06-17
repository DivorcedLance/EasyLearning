
function CourseCard({courseName}) {

  return (
    <>
        <div className="flex flex-col bg-white rounded-lg shadow-lg w-auto">
            <div className="flex justify-between items-center p-4 bg-[#CC99FF]">
                <div>
                    <h2 className="text-lg font-semibold">{courseName}</h2>
                    <p className="text-sm text-black">4to B</p>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Ver</button>
                </div>
            </div>
            <div className="bg-gray-100 p-4">
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi ut odio lacinia sodales. Sed nec nisl nec felis dictum ultricies. Nullam nec purus nec nisi vehicula tincidunt.</p>
            </div>
            <div className='flex flex-row gap-8 justify-end items-center h-full mr-5 py-1'>
                <img src="img/usuario.png" alt="" className="object-cover" />
                <img src="img/carpeta.png" alt="" className='object-cover' />
            </div>
        </div>
    </>
  )
}

export default CourseCard