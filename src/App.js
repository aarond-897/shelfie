import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inventory:[],
      selectedProduct:{}
     }
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory=()=>{
    axios.get('/api/inventory')
    .then(res=>(
      this.setState({inventory:res.data})
      )
    )
    .catch(err=>console.log('get inventory not working'))
  }

  setSelectedProduct=(product)=>{
    this.setState({
      selectedProduct:product
    })
  }

  render() { 
    return ( 
      <div className="App">
      <Dashboard inventory={this.state.inventory} getInventoryFn={this.getInventory} setSelectedProductFn={this.setSelectedProduct}/>
      <Form getInventoryFn={this.getInventory} selectedProduct={this.state.selectedProduct}/>
      <Header />
    </div>
     );
  }
}

export default App;
