import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Routes from './Routes';
import HomePage from './pages/Home';
import AuthPage from './pages/Auth';
import './App.css';
import { theme } from './myTheme';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/auth', component: AuthPage },
];

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes routes={routes} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
