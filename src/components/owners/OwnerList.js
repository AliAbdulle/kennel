import React, { Component } from 'react'
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
                    </div>
                    )
            }

            </article>
        );
    }
}