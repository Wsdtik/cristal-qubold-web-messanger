// App.tsx
import { Router, Route } from '@solidjs/router';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import SettingsPage from './pages/SettingsPage';
import AdminPage from './pages/AdminPage';

const App = () => (
  <Router>
    <Route path="/" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/chat" component={ChatPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/admin" component={AdminPage} />
  </Router>
);

export default App;