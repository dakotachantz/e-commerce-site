import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class SecondaryNav extends Component {
    render() {
        return (
            <div className="collapse" id="storeCollapse" style={{ position: 'relative', zIndex: 1035, width: '100%' }}>
                <nav style={{ backgroundColor: 'rgba(51, 51, 51, .9)' }} className="navbar navbar-toggleable-md navbar-light">
                    <div className="" id="navbarNav">
                        <ul style={{ color: '#fff' }} className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link secNavLink" exact to="/tops">Tops</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link secNavLink" to="/bottoms">Bottoms</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link secNavLink" to="/outerwear">Outerwear</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
