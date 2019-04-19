import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <article className="employees">
                {
                    this.props.employees.map(employee =>
                        // <div key={employee.id}>
                        //     {employee.name}
                        //     <button
                        //         onClick={() => this.props.deleteEmployee(employee.id)}
                        //         className="card-link">Delete</button>
                        // </div>

                        <div key={employee.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {/* <img src={dog} className="icon--dog" alt="dog icon"/> */}
                            {employee.name}
                            <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                            <button
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</button>
                        </h5>
                    </div>
                </div>
                    
                    )
                }

            </article>
        );
    }
}