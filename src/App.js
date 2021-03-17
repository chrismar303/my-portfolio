import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Main from 'components/Main';

function App() {
  return (
    <Router>
      <AppNavbar></AppNavbar>
      <Route component={Main} path='/' exact />
      <Footer />
    </Router>
  );
}

export default App;
