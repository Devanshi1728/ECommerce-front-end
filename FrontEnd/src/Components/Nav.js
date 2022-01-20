import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('user')

    const logout = () => {
        localStorage.clear()
        navigate('/register')
    }

    return(
        <div>
             <img
            alt='logo'
            className='logo'
             src='shorturl.at/qBMRV' />
              {auth ? 
           <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/register">Logout ({JSON.parse(auth).name})</Link></li> 
                </ul>
                :  <ul className="nav-right nav-ul">
                    <li><Link to="/register">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul> 
              }
        </div>
    )
}

export default NavBar;