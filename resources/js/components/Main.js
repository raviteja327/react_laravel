import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Form from './employee/Form';
import Edit from './employee/Edit';
import List from './employee/List';
import Nav from './Nav';

function Main(){
return(
    <Router>
      <main>
        <Nav/>
        <Switch>
          <Route path="/employee/index" exact component={List} />
          <Route path="/employee/form"  component={Form} />
          <Route path="/employee/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  )
}

export default Main;
ReactDOM.render(<Main/>, document.getElementById('main-employee'));
