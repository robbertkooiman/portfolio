import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Vitae from './components/Vitae';
import Page from "./components/Page";

function App() {
  const title = "Robbert Kooiman";
  const routes = [
    {
      path: "/projects",
      title: 'Projects',
      component: Projects
    },
    {
      path: "/vitae",
      title: 'Vitae',
      component: Vitae
    },
    // {
    //   path: "/",
    //   title: null,
    //   component: Home
    // },
  ]
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          {routes.map(route => <Route path={route.path} render={(props) => (<Page title={route.title ? title + ' | ' + route.title : title}>{React.createElement(route.component, props)}</Page>)}></Route>)}
          <Route exact path="/"><Redirect to="/vitae"></Redirect></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
