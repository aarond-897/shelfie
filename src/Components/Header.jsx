import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className='header'>
            <div className='header-content'>
                <div className="icon-header">
            <img src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png" alt="shelfie icon"/>
            <h1 className='web-title'>Shelfie</h1>
            </div>
            <div className="header-buttons">
            <Link to='/'>
            <button className='header-button'>Dashboard</button>
            </Link>
            <Link to="/add">
            <button className='header-button'>Add Inventory</button>
            </Link>
            </div>
            </div>
        </div> 
        );
    }
}
 
export default Header;