import React, { Component } from 'react'
import NavBar from './NavBar';
import SecondaryNav from './SecondaryNav';
import Footer from './Footer';
export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <SecondaryNav />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
