import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Registre from './pages/Registre';
import Animais from './pages/Animais';
import Funcionarios from './pages/Funcionarios';
import Financeiro from './pages/Financeiro';
import Maquinas from './pages/Maquinas';

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('webfarm_auth_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const getRouteFromHash = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
    if (['dashboard', 'animais', 'maquinas', 'equipe', 'financeiro', 'login', 'registro'].includes(hash)) {
      return hash;
    }
    return currentUser ? 'dashboard' : 'login';
  };

  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const route = getRouteFromHash();
      if (!currentUser && (route === 'dashboard' || route === 'animais' || route === 'maquinas' || route === 'equipe' || route === 'financeiro')) {
        window.location.hash = '#/login';
        setCurrentRoute('login');
        return;
      }

      if (currentUser && (route === 'login' || route === 'registro')) {
        window.location.hash = '#/dashboard';
        setCurrentRoute('dashboard');
        return;
      }

      setCurrentRoute(route);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentUser]);

  const navigateTo = (route) => {
    window.location.hash = `#/${route}`;
    setCurrentRoute(route);
  };

  const handleLogin = (userPayload) => {
    const user = userPayload || {
      nome: 'Lucas Ramos',
      email: 'produtor@fazenda.com.br',
      perfil: 'Administrador'
    };
    setCurrentUser(user);
    try {
      localStorage.setItem('webfarm_auth_session', JSON.stringify(user));
    } catch {}
    navigateTo('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('webfarm_auth_session');
    } catch {}
    navigateTo('login');
  };

  return (
    <div key={currentRoute} className="animate-page-enter">
      {currentRoute === 'dashboard' && currentUser && (
        <Dashboard
          onNavigate={(target) => navigateTo(target)}
          onLogout={handleLogout}
          user={currentUser}
        />
      )}

      {currentRoute === 'animais' && currentUser && (
        <Animais
          onNavigate={(target) => navigateTo(target)}
          onLogout={handleLogout}
          user={currentUser}
        />
      )}

      {currentRoute === 'maquinas' && currentUser && (
        <Maquinas
          onNavigate={(target) => navigateTo(target)}
          onLogout={handleLogout}
          user={currentUser}
        />
      )}

      {currentRoute === 'equipe' && currentUser && (
        <Funcionarios
          onNavigate={(target) => navigateTo(target)}
          onLogout={handleLogout}
          user={currentUser}
        />
      )}

      {currentRoute === 'financeiro' && currentUser && (
        <Financeiro
          onNavigate={(target) => navigateTo(target)}
          onLogout={handleLogout}
          user={currentUser}
        />
      )}

      {currentRoute === 'login' && (
        <Login
          onLogin={handleLogin}
          onNavigateRegister={() => navigateTo('registro')}
        />
      )}

      {currentRoute === 'registro' && (
        <Registre
          onNavigateLogin={() => navigateTo('login')}
          onRegisterSuccess={handleLogin}
        />
      )}
    </div>
  );
}
