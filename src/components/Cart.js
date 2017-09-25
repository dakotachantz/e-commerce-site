import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Cart extends Component {
    render() {
        return (
            <div className="container cart-container">
                <div className="" id="basket">
                    <div style={{ display: 'flex', flex: 1 }} className="card">
                        <div className="card-header">
                            <h3>Your Cart</h3>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan="2">Product</th>
                                        <th>Quantity</th>
                                        <th colSpan="2">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="#">
                                                <img src="img/detailsquare.jpg" alt="White Tee" />
                                            </Link>
                                        </td>
                                        <td><Link to="#">White Tee</Link>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </td>
                                        <td>$24.99</td>
                                        <td><Link to="#"><i className="fa fa-trash-o"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="#">
                                                <img src="img/basketsquare.jpg" alt="Black Tee" />
                                            </Link>
                                        </td>
                                        <td><Link to="">Black Tee</Link>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </td>
                                        <td>$24.99</td>
                                        <td><Link to="#"><i className="fa fa-trash-o"></i></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        {/* <!-- /.table-responsive --> */}
                    </div>
                    {/* <!-- /.box --> */}

                    <div className="">
                        <div style={{ display: 'flex', flex: 1 }} className="card" id="order-summary">
                            <div className="card-header">
                                <h3>Order summary</h3>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <th>$49.98</th>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <th>-</th>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <th>FREE</th>
                                        </tr>
                                        <tr className="total">
                                            <td>Total</td>
                                            <th>$49.98</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <button style={{ width: '90%' }} className="btn btn-primary">CHECKOUT</button>
                            </div>

                        </div>
                    </div>
                    {/* <!-- /.col-md-3 --> */}

                </div>
                {/* <!-- /.container --> */}
            </div>
        )
    }
}
