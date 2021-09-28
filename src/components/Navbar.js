import React, { Component } from 'react';

const Navbar = ({account}) => {

 
    return (
  <div className="navbar-fixed white">

  
  <nav>
  <div className="nav-wrapper white">
    <a href="#" className="brand-logo center light-blue-text lighten-2">E T H E R N O T E S</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a className="blue">{account}</a></li>
        
      </ul> 
  </div>

  
</nav>
</div>
    );
  
}

export default Navbar;
