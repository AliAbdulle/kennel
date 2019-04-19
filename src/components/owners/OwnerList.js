import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./owner.css"

export default class OwnerList  extends Component {
    render() {
        return (
            <article className ="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                         {owner.name}
                         <p>
                         {owner.phone}
                         </p>
                         <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                         <button
                                onClick={() => this.props.deleteOwner(owner.id)}

                                className="card-link">Delete</button>


                    </div>
                    )
            }

            </article>
        );
    }
}