import React, { Component } from 'react'
import src from '../img/about.jpg';
export default class About extends Component {
    render() {
        return (
            <div className="container about-container">
                <div>
                    <img className="about-img" src={src} alt="about" />
                </div>
                <div className="content">
                    <h2>Where it began</h2>
                    <p>
                        Basics began in March of 2008, in a tiny San Francisco apartment. Since then, we kept at our original goal of stitching clothes for modern guys, focusing on fit as well as construction and striving to provide a modern, versatile style. This collection shows off those ideals, and shows how a small change can go a long way toward updating a timeless look.
                    </p>
                </div>
            </div>
        )
    }
}
