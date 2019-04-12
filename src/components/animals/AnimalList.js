import React, { Component } from 'react'
import "./animal.css"

export default class AnimalList  extends Component {
    render() {
        return (
            <article className ="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                         {animal.name}
                    </div>
                    )
            }

            </article>
        );
    }
}