import React from 'react';
import 'milligram';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../src/pages/Home'
import CardsList from '../src/pages/CardsList'
import CardDetails from '../src/pages/CardDetails'
import NotFound from '../src/pages/NotFound'
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Magic The Gathering</h1>
          <Navbar />
        </header>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cards' exact component={CardsList}/>
          <Route path='/cards/:id' exact component={CardDetails}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
