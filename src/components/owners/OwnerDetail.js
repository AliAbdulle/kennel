import React, { Component } from "react"
import "./owner.css"
//import dog from "./DogIcon.svg"


export default class Owners extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="owner">
                <div key={ this.props.owners.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={ dog } className="icon--dog" /> */}
                            { this.props.owners.name }
                        </h4>
                        <h6 className="card-title">{ this.props.owner.phone }</h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.dischargeOwner(this.props.owners.id)
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