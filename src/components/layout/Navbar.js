import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 function Navbar ({title,icon}) {
        return (
            <nav className='navbar bg-primary'>
           <h1>
            <i className={icon}></i>{title}
            </h1>
            <ul>
            <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
                
            </ul>
           
         
            
            </nav>
        )
    
}

//These are the default props if not passed these will be used

//if we use the functional components then we would use the Component name and add defaultProps
//component.propTypes

Navbar.defaultProps = {
    title:'GitHub Finder',
    icon:'fab fa-github'
}

//this is for checking the type of the props passes
//although code will be executed a warning in the console appears if wrong prop type is passed.

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar
