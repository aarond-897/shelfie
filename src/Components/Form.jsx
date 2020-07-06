import React, {Component} from 'react';
import axios from 'axios';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            price:0,
            img:"",
            id:null
          }
    }

    componentDidUpdate(prevProps){
        if(this.props.selectedProduct.id !== prevProps.selectedProduct.id){
            console.log('did update working')
            this.setState({
                name:this.props.selectedProduct.name,
                price:this.props.selectedProduct.price,
                img:this.props.selectedProduct.img,
                id:this.props.selectedProduct.id
            })
        }
    }

    handleImageChange=(val)=>{
        this.setState({
            img: val
        })
    }

    handlePriceChange=(val)=>{
        this.setState({
            price: val
        })
    }

    handleNameChange=(val)=>{
        this.setState({
            name: val
        })
    }

    clearInputs=()=>{
        this.setState({
            name:"",
            price:0,
            img:""
        })
    }

    addToInventory=()=>{
        axios.post('/api/product',{name:this.state.name, price: this.state.price, img: this.state.img})
        .then(res=>(
            this.clearInputs(),
            this.props.getInventoryFn()
            )
        )
        .catch(err=>console.log(err))
    }

    saveChanges=()=>{
        axios.put(`/api/product/${this.state.id}`, this.state )
        .then(res=>(
            this.props.getInventoryFn()
        ))
        .catch(err=>console.log(err))
    }



    render() { 
        return (
        <div>
            <h2>Image URL:</h2>
            <input onChange={e=>this.handleImageChange(e.target.value)} value={this.state.img}/>
            <h2>Product Name:</h2>
            <input onChange={e=>this.handleNameChange(e.target.value)} value={this.state.name}/>
            <h2>Price:</h2>
            <input onChange={e=>this.handlePriceChange(e.target.value)} value={this.state.price}/>
            <div className='form-buttons'>
            <button onClick={this.clearInputs}>Cancel</button>
            {this.state.id ===null? <button onClick={this.addToInventory}>Add to Inventory</button> : <button onClick={this.saveChanges}>Save Changes</button> }
            
            </div>
        </div>
         );
    }
}
 
export default Form;