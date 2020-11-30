import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Facts from './Facts';
import Resources from './Resources';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Facts} exact/>
             <Route path="/Resources" component={Resources}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
