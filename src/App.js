import React, {Suspense} from 'react';
import './components/css/style.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import LoadingSpinner from './components/generics/LoadingSpinner';
import "./App.css";
const ProjectLayout = React.lazy(() => import('./components/ProjectLayout'));
const BlogsLayout = React.lazy(() => import('./components/BlogsLayout'));
const AboutLayout = React.lazy(() => import('./components/AboutLayout'));
const ContactPage = React.lazy(() => import('./components/ContactPage'));

function App() {
  return (
    <div className='app'>
      <Router>
        <NavigationBar  />
        <Suspense fallback={<div className="center">
            <LoadingSpinner />
          </div>}>
          <Switch>
            <Route exact path="/" component={AboutLayout} />
            <Route exact path="/blogs" component={BlogsLayout} />
            <Route exact path="/projects" component={ProjectLayout} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
