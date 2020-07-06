import React, {Component} from 'react';
import Product from './Product';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


deleteProduct=(id)=>{
    axios.delete(`/api/product/${id}`)
    .then(this.props.getInventoryFn)
    .catch(err=>console.log('error on delete product'))
}

    render() { 
        const products=this.props.inventory.map((item,i)=>(
            <div key={i}>
                <Product id={item.id} img={item.img} price={item.price} name={item.name} 
                getInventoryFn={this.props.getInventoryFn} deleteProductFn={this.deleteProduct} setSelectedProductFn={this.props.setSelectedProductFn}/>
            </div>
        ))
        return (
        <div>
            Dashboard
            {products}
        </div> 
        );
    }
}
 
export default Dashboard;