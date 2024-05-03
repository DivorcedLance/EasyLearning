import { Login } from '../components/Login';

export function LoginPage() {
    return (
        <div className='flex'>
            <Login />
            <img src="/img/TESIS_1.png" alt="Login Image" style={{ objectFit: 'cover' }}/>
        </div>
    );
}
