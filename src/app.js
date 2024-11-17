import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import WasteManagement from './components/WasteManagement';
import Education from './components/Education';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/waste" component={WasteManagement} />
          <Route path="/education" component={Education} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
