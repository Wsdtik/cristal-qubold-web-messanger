import { createSignal } from 'solid-js';

const RegisterPage = () => {
    const [email, setEmail] = createSignal('');
    const [password, setPassword] = createSignal('');
    const [confirmPassword, setConfirmPassword] = createSignal('');

    const handleRegister = () => {
        // Implement registration logic
    };


    return (
        <div>
            <h1>Register</h1>
            <input
                type="email"
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password()}
                onInput={(e) => setPassword(e.currentTarget.value)}
                placeholder="Password"
            />
            <input
                type="password"
                value={confirmPassword()}
                onInput={(e) => setConfirmPassword(e.currentTarget.value)}
                placeholder="Confirm Password"
            />
            <button onClick={handleRegister}>Register</button>  
        </div>
    );
};

export default RegisterPage;