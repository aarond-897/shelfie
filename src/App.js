import React, {Component} from 'react';
import './reset.css';
import './App.css';
import routes from './router';
import axios from 'axios';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }



  render() { 
    return ( 
      <div className="App">
        {routes}
    </div>
     );
  }
}

export default App;
