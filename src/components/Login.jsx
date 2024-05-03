import { useState } from 'react';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='flex-col p-4 text-center space-y-8'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}