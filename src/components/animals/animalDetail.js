import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.svg"


export default class Animals extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="animals">
                <div key={ this.props.animals.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog" />
                            { this.props.animals.name }
                        </h4>
                        <h6 className="card-title">{ this.props.animals.breed }</h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.dischargeAnimal(this.props.animals.id)
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