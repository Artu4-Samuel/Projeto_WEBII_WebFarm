import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Registre from './pages/Registre';
import Animais from './pages/Animais';
import Funcionarios from './pages/Funcionarios';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div key={currentView} className="animate-page-enter">
      {currentView === 'dashboard' && (
        <Dashboard
          onNavigate={(view) => setCurrentView(view)}
          onLogout={() => setCurrentView('login')}
        />
      )}

      {currentView === 'animais' && (
        <Animais
          onNavigate={(view) => setCurrentView(view)}
          onLogout={() => setCurrentView('login')}
        />
      )}

      {currentView === 'equipe' && (
        <Funcionarios
          onNavigate={(view) => setCurrentView(view)}
          onLogout={() => setCurrentView('login')}
        />
      )}

      {currentView === 'login' && (
        <Login
          onLogin={() => setCurrentView('dashboard')}
          onNavigateRegister={() => setCurrentView('register')}
        />
      )}

      {currentView === 'register' && (
        <Registre
          onNavigateLogin={() => setCurrentView('login')}
          onRegisterSuccess={() => setCurrentView('dashboard')}
        />
      )}
    </div>
  );
}

export default App;
