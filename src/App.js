import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Project from './components/Project';
import SinglePost from './components/SinglePost';
import AppNavbar from './components/AppNavbar';
import './App.scss';


function App() {
  return (
    <Router>
      <AppNavbar></AppNavbar>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/projects' />
      </Switch>
    </Router>
  );
}

export default App;
