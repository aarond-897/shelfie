import React, {Component} from 'react';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleDeleteClick=(id)=>{
        console.log(id)
        this.props.deleteProductFn(id)
    }

    handleSetSelectedProduct=()=>{
        this.props.setSelectedProductFn({
            name: this.props.name,
            id:this.props.id,
            img: this.props.img,
            price: this.props.price
        })
    }

    render() { 
        return (
        <div className='product'>
            <img src={this.props.img} alt={this.props.name}/>
            <p>{this.props.name}</p>
            <p>{this.props.price}</p>
            <button onClick={()=>this.handleDeleteClick(this.props.id)}>Delete</button>
            <button onClick={this.handleSetSelectedProduct}>Edit</button>
        </div> 
        );
    }
}
 
export default Product;