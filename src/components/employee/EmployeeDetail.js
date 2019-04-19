import React, { Component } from "react"
import "./employee.css"
//import dog from "./DogIcon.svg"


export default class Employees extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employees">
                <div key={ this.props.employee.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={ dog } className="icon--dog" /> */}
                            { this.props.employee.name }
                        </h4>
                        <h6 className="card-title">{ this.props.employee.phone }</h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.dischargeEmployee(this.props.employee.id)
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