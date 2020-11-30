import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Facts</NavLink>
          <NavLink to="/Calculator">Calculator</NavLink>
          <NavLink to="/Resources">Resources</NavLink>
       </div>
    );
}
 
export default Navigation;