import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "font-awesome/css/font-awesome.min.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route,Switch,} from "react-router-dom";
import AfterLogin from './afterLogin';

ReactDOM.render((
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/topology" component={AfterLogin} />
         
          </Switch>
      </div>
    </Router>
  )
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

