import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home';
import NavTabs from './components/nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import './fonts.css';







function App() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay setting isMounted to true to allow the component to render first
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
     <div className={`fade-in ${isMounted ? 'visible' : ''}`}>
      <header className="App-header">
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            
      </Switch>
        <NavTabs></NavTabs>
        
      </header>
    </div>
    </Router>
  );
}

export default App;
