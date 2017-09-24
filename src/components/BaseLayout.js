import React, { Component } from 'react'
import NavBar from './NavBar';
export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Ecommerce Site</h1>
                <p>This is some text.</p>
            </div>
        )
    }
}
