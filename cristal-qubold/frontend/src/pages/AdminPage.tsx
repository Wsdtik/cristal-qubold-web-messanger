import { createSignal } from 'solid-js';

const AdminPage = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');

  const handleAdminPage = () => {
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
      <button onClick={handleAdminPage}>Login</button>
    </div>
  );
};

export default AdminPage;