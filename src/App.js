import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import AppNavbar from './components/AppNavbar';
import Contact from './components/Contact';
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
