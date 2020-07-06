import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            price:0,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F01%2F03%2F00%2F43%2Fupload-1118928_640.png&f=1&nofb=1",
            id:null
          }
    }

    // componentDidUpdate(prevProps,prevState){
    //     if(this.state.id !== prevState.id){
    //         console.log('did update working')
    //         this.setState({
    //             name:"",
    //             price:0,
    //             img:"",
    //             id: ""
    //         })
    //     }
    // }
    getProduct=()=>{
        axios.get(`/api/product/${this.props.match.params.id}`)
        .then(res=>(
            this.setState({
                name: res.data[0].name,
                price: res.data[0].price,
                img: res.data[0].img,
                id: res.data[0].id
            })
        ))
        .catch(err=>console.log(err))
    }

    componentDidMount(){
        this.getProduct();

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
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F01%2F03%2F00%2F43%2Fupload-1118928_640.png&f=1&nofb=1",
            id:null
        })
    }

    addToInventory=()=>{
        axios.post('/api/product',{name:this.state.name, price: this.state.price, img: this.state.img})
        .then(res=>(
            this.clearInputs()
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
            <Header></Header>
            <div className="form">
            <img src={this.state.img} alt={this.state.name}/>
            <h2>Image URL:</h2>
            <input onChange={e=>this.handleImageChange(e.target.value)} value={this.state.img}/>
            <h2>Product Name:</h2>
            <input onChange={e=>this.handleNameChange(e.target.value)} value={this.state.name}/>
            <h2>Price:</h2>
            <input onChange={e=>this.handlePriceChange(e.target.value)} value={this.state.price}/>
            <div className='form-buttons'>
            <button onClick={this.clearInputs}>Cancel</button>
            <Link to="/" >
            {this.state.id ===null? <button onClick={this.addToInventory}>Add to Inventory</button> : <button onClick={this.saveChanges}>Save Changes</button> }
            </Link>
            </div>
            </div>
        </div>
         );
    }
}
 
export default Form;