import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalList from './animals/AnimalList'
import OwnerList from './owners/OwnerList'
import AnimalForm from './animals/AnimalForm'
import AnimalsManager from '../modules/AnimalManager'
import EmployeesManager from '../modules/EmployeesManager'
import LocationsManager from '../modules/LocationManager'
import OwnersManager from '../modules/OwnersManager';



class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }
    componentDidMount() {
        const newState = {}
            AnimalsManager.getAll()
                .then(animals => newState.animals = animals)
             EmployeesManager.getAll()
                .then(employees => newState.employees = employees)
            LocationsManager.getAll()
                .then(locations => newState.locations = locations)
            OwnersManager.getAll()
                .then(owners => newState.owners = owners)
                .then(() => this.setState(newState))

    }

    deleteAnimal = id => {
        return AnimalsManager.delete(id)
        .then(() => AnimalsManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))

    }
    deleteEmployee = id => {
            return EmployeesManager.delete(id)
            .then(() => EmployeesManager.getAll())
            .then(employees => this.setState({
                employees: employees
            }))
    }
    deleteOwner = id => {
        return OwnersManager.delete(id)
        .then(() => OwnersManager.getAll())
        .then(owners => this.setState({
            owners: owners
        }))
    }
    deleteLocation = id => {
        return LocationsManager.delete(id)
        .then(() => LocationsManager.getAll())
        .then(locations => this.setState({
            locations: locations
        }))
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
                <Route path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner}
                        owners={this.state.owners} />
                }} />
                {/* <Route path="/locations" render={(props) => {
                    return <LocationList deleteOwner={this.deleteOwner}
                        owners={this.state.owners} />
                }} /> */}
            </React.Fragment>
        )
    }
}

export default ApplicationViews