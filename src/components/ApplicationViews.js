import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalList from './animals/AnimalList'
import OwnerList from './owners/OwnerList'
import AnimalForm from './animals/AnimalForm'



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
            }
            )
            .then(() => fetch("http://localhost:5002/employees")
                .then(r => r.json()))
            .then(employees => {
                newState.employees = employees
            }
            )
            .then(() => fetch("http://localhost:5002/owners")
                .then(r => r.json()))
            .then(owners => {
                newState.owners = owners
                this.setState(newState)
            }
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
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }


    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            })
            )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                        deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals} />
                }} />

                {/* Our shiny new route. We pass employees to the AnimalForm so a dropdown can be populated */}
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />


                <Route exact path="/animals" render={(prop) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner}
                        owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews