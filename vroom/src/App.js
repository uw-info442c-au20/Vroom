import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Facts from './Facts';
import Resources from './Resources';
import Calculator from './Calculator';
import Navigation from './Navigation';


class App extends Component {
  render() {
    return (      
       <BrowserRouter basename="Vroom">
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Facts} exact/>
             <Route path="/Resources" component={Resources}/>
             <Route path="/Calculator" component={Calculator}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
