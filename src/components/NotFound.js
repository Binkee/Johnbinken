import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h3 className="cantFind">404</h3>
                <div className="underline"></div>
                <p className="notFound">This page could not be found!</p>
            </div>
        )
    }
}
