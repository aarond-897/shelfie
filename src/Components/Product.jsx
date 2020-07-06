import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleDeleteClick=(id)=>{
        console.log(id)
        this.props.deleteProductFn(id)
    }

    // handleSetSelectedProduct=()=>{
    //     this.props.setSelectedProductFn({
    //         name: this.props.name,
    //         id:this.props.id,
    //         img: this.props.img,
    //         price: this.props.price
    //     })
    // }

    render() { 
        return (
        <div className='product'>
            <img className='product-image' src={this.props.img} alt={this.props.name}/>
            <div className='product-content'>
            <div className="product-deets">
            <p>{this.props.name}</p>
            <p>${this.props.price}</p>
            </div>
            <div className="product-buttons">
            <Link to="/">
            <button className="product-button"onClick={()=>this.handleDeleteClick(this.props.id)}>Delete</button>
            </Link>
            <Link to={`/edit/${this.props.id}`}>
            <button className="product-button">Edit</button>
            </Link>
            </div>
            </div>
        </div> 
        );
    }
}
 
export default Product;