import React from 'react';
import { Link } from "gatsby"
import logo from '../../../static/logo_wilson_antury.png'

const Navbar = ()=>{

    const links = ['Inicio', 'Contacto', 'Portafolio'] 
    
    return (
        <div className="navbar">
            <Link to="/" > 
                <div className="navbar_logo">
                    <picture>
                        <img src={logo} alt="logo-wilson-antury" className="logo_ant"></img>
                    </picture>
                    <div>
                        <h4>
                            Wilson Antury
                        </h4>
                        <h6>
                            Backend developer
                        </h6>
                    </div>
                </div>
            </Link>
            <nav>
                <ul className="links-nav">
                    {
                        links.map(link => <li>{link}</li>)
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;