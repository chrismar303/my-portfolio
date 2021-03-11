import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import AppNavbar from './components/AppNavbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AppNavbar></AppNavbar>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Project} path='/projects' />
        <Route component={Contact} path='/contact' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
