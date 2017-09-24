import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="secNavLink" style={{ fontSize: '1rem', textTransform: 'uppercase' }}>&copy; Basics 2017</span>
                </div>
            </footer>
        )
    }
}
