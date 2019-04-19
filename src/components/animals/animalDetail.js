import React, { Component } from "react"
import "./animal.css"
import dog from "./DogIcon.svg"


export default class Animals extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        console.log(this.props)
        return (
            <section className="animals">
                <div key={ this.props.animal.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog" alt="Dog Icon" />
                            { this.props.animal.name }
                        </h4>
                        <h6 className="card-title">{ this.props.animal.breed }</h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.dischargeAnimal(this.props.animal.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}