import React from 'react';
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <Link to='/' id='logoType'>Jack Poppleton</Link>
            <Link to='/about' className='navItem' id='logoType'>About</Link>
            <Link to='/contact' className='navItem' id='logoType'>Contact</Link>
            <Link to='/gallery' className='navItem' id='logoType'>Gallery</Link>
        </nav>
    );
}

export default Navbar;