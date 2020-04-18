import React, { Component } from 'react';
import Login from '../Login';
import Register from '../Register';
import Header from '../Header';
import Home from '../Home';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div className="container">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
        
      </div>
    )
  }
};

export default App;