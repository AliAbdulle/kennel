import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalList from './animals/AnimalList'
import OwnerList from './owners/OwnerList'



class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }
    componentDidMount() {
        const newState = {}
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => {
                newState.animals = animals
                this.setState(newState)}
                )
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => {
                newState.employees = employees
                 this.setState(newState)}
            )
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => {
                newState.owners = owners
                 this.setState(newState)}
            )
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
               <Route exact path="/animals" render={(prop) => {
                  return <AnimalList deleteAnimal={this.deleteAnimal}
                       animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews