// pages/LoginPage.tsx
import { createSignal } from 'solid-js';

const LoginPage = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');

  const handleLogin = () => {
    // Implement login logic
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;