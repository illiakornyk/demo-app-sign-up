import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import HomePage from './pages/Home';
import AuthPage from './pages/Auth';
import './App.css';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/auth', component: AuthPage },
];

function App() {
  return (
    <Router>
      <Routes routes={routes} />
    </Router>
  );
}

export default App;
