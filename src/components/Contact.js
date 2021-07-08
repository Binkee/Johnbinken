import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contacts">
                <div className="text-center">
                    <h1>contact me</h1>
                <p>Please fill out the form and i'll contact you as soon as possible!</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <input id="name" type="text" className="form-control" placeholder="Name" name="name"/>
                            <input id="phone" type="number" className="form-control" placeholder="Phone Number" phone="phone"/>
                            <input id="email" type="email" className="form-control" placeholder="Email" email="email"/>
                            <input id="subject" type="text" className="form-control" placeholder="Subject" subject="subject"/>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <textarea id="description" type="text" className="form-control" placeholder="text" email="email"></textarea>
                            <button className="btn btn-secondary" type="submit">Contact me</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
