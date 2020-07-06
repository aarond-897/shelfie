import React, {Component} from 'react';
import Product from './Product';
import Header from './Header'
import axios from 'axios';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
             inventory:[]
         }
    }

componentDidMount(){
    this.getInventory();
}

getInventory=()=>{
    axios.get('/api/inventory')
    .then(res=>(
      this.setState({inventory:res.data})
      )
    )
    .catch(err=>console.log('get inventory not working'))
  }

deleteProduct=(id)=>{
    axios.delete(`/api/product/${id}`)
    .then(this.getInventory)
    .catch(err=>console.log('error on delete product'))
}

    render() { 
        const products=this.state.inventory.map((item,i)=>(
            <div key={i} >
                <Product id={item.id} img={item.img} price={item.price} name={item.name} 
                getInventoryFn={this.props.getInventoryFn} deleteProductFn={this.deleteProduct} setSelectedProductFn={this.props.setSelectedProductFn}/>
            </div>
        ))
        return (
        <div>
            <Header ></Header>
            <div className='dashboard'>
            {products}
            </div>
        </div> 
        );
    }
}
 
export default Dashboard;