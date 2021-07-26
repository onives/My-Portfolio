import React from 'react';
import './components/css/style.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import ProjectLayout from './components/ProjectLayout';
import BlogsLayout from './components/BlogsLayout';
import AboutLayout from './components/AboutLayout';
// import FooterLayout from './components/FooterLayout';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <NavigationBar  />
        <Switch>
          <Route exact path="/" component={AboutLayout} />
          <Route exact path="/blogs" component={BlogsLayout} />
          <Route exact path="/projects" component={ProjectLayout} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
