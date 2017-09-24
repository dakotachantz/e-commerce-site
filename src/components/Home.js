import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div className="masthead fixed-top">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Men's Style Essentials</div>
                        <div className="intro-heading">This is Basics</div>
                        <div className="buttonGroup">
                            <Link style={{ color: 'white' }} className="btn btn-primary" to="/tops">Tops</Link>
                            <Link style={{ color: 'white' }} className="btn btn-primary" to="/bottoms">Bottoms</Link>
                            <Link style={{ color: 'white' }} className="btn btn-primary" to="/outerwear">Outerwear</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
