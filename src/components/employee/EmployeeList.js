import React, { Component } from 'react'
import "./employee.css"

export default class EmployeeList  extends Component {
    render() {
        return (
            <article className ="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                         {employee.name}
                    </div>
                    )
            }

            </article>
        );
    }
}