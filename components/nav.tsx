import React from 'react';
import '../styles/navbar.css'
import { statelessFunction } from './utils/types';
// import { FaCartPlus } from "react-icons/fa"
// import { Link } from 'react-router-dom';
//import Cart from './cart';

interface NavbarProps {
  filter: (event: string) => void;
  onShowSideBar: statelessFunction;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  //console.log('props' + props.onShowSideBar)
  const eventHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const element = event.target as HTMLElement
    return element.innerText
  }
  return(
    <React.Fragment>
      <nav className='nav'>
        <div className='nav-content-container '>
          <div className='menu-bars-block'>
            {/* <Link to="#" className='menu-bars'>
              <FaCartPlus onClick={() => props.onShowSideBar()}/>
            </Link> */}
          </div>
          <div className='nav-content-block'>
            <ul className='nav-link'>
              <li>All Products Are Not Real</li>
            </ul>
            <div className='dropdown'>
              <button className='drop-btn'>Category</button>
              <div className='dropdown-content'>
                <li onClick={(e) => props.filter(eventHandler(e))}>Men Clothing</li>
                <li onClick={(e) => props.filter(eventHandler(e))}>Jewelery</li>
                <li onClick={(e) => props.filter(eventHandler(e))}>Electronics</li>
                <li onClick={(e) => props.filter(eventHandler(e))}>Women Clothing</li>
                <li onClick={(e) => props.filter(eventHandler(e))}>All Categories</li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
    
};


export default Navbar;