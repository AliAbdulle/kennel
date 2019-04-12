import React, { Component } from 'react'
import "./locations.css"

export default class LocationList  extends Component {
    render() {
        return (
           <section className= "content">
                <h1>Our Locations</h1>
                <div className= "LocationWrapper">
                <section className ="locatonContainer">
                <h4>Nashville North </h4>
                <h5>500 Circle Way</h5>
                </section>
                <section className ="locatonContainer">
                <h4>Nashville South </h4>
                <h5>10101 Binary Court</h5>
                </section>
                </div>
                </section>
        );
    }
}