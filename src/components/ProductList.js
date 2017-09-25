import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import clothes from '../data/data';
export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'details': {},
            'endpoint': ''
        }
    }

    render() {
        let match = this.props.match;
        const endpoint = this.props.match.params.category;
        let foundClothes = clothes[endpoint].map((item, index) => {
            return (
                <div className="card clothingItem" key={item.id}>
                    <NavLink
                        activeClassName="selected"
                        className="navlink" style={{ display: 'flex', flexDirection: 'column' }}
                        to={`${match.url}/${item.id}`}>
                        <img src={item.img} alt={item.productName} style={{ height: 230, width: 230, margin: '0 auto', alignSelf: 'center' }} /> <hr />
                        <p style={{ textTransform: 'none', borderTop: '1px solid lightgray', paddingTop: '.5em' }} className="card-subtitle">&nbsp;&nbsp;{item.productName}, {item.color}{item.fit}{item.style}</p>
                        <span style={{ marginLeft: '.4em' }} className='text-muted'>${item.price}</span>
                    </NavLink>
                </div>
            )
        }
        )
        return (
            <div className="masthead product-masthead parallax" style={{ flexDirection: 'column' }}>
                <div className="container main-container">
                    <div className="container" style={{ marginTop: '6em' }}>
                        <div className="intro-text">
                            <div className="intro-heading" style={{ marginTop: '.5em' }}>{endpoint}</div>
                        </div>
                    </div>
                    <div className="container clothingContainer">
                        {foundClothes}
                    </div>
                </div>
            </div>
        )
    }
}
