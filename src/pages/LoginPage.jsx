import { Login } from '../components/Login'

export function LoginPage() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center p-4  bg-white">
        <div className="flex flex-row-reverse justify-center w-full">
          <Login />
          <div className="">
            <img
              className="object-fit"
              src="/img/TESIS_1.png"
              alt="Login Image"
            />
          </div>
        </div>
      </div>
      <footer className="flex justify-center p-4 text-white bg-cyan-500">
        <p>EASY LEARNING 2023</p>
      </footer>
    </div>
  )
}