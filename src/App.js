import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Vitae from './components/Vitae';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/vitae" component={Vitae}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
