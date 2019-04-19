import { Route } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import LocationList from "./locations/LocationList";
import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetail"
import AnimalList from "./animals/AnimalList";
import OwnerList from "./owners/OwnerList";
import AnimalDetail from "./animals/AnimalDetail";
import AnimalForm from "./animals/AnimalForm";
import AnimalsManager from "../modules/AnimalsManager";
import EmployeesManager from "../modules/EmployeesManager";
import LocationsManager from "../modules/LocationManager";
import OwnersManager from "../modules/OwnersManager";

class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    };
    componentDidMount() {
        const newState = {};
        AnimalsManager.getAll().then(animals => (newState.animals = animals));
        EmployeesManager.getAll().then(
            employees => (newState.employees = employees)
        );
        LocationsManager.getAll().then(
            locations => (newState.locations = locations)
        );
        OwnersManager.getAll()
            .then(owners => (newState.owners = owners))
            .then(() => this.setState(newState));
    }

    // deleteAnimal = id => {
    //     return AnimalsManager.delete(id)
    //     .then(() => AnimalsManager.getAll())
    //     .then(animals => this.setState({
    //         animals: animals
    //     }))

    // }
    deleteAnimal = id =>
        AnimalsManager.delete(id)
            .then(AnimalsManager.getAll)
            .then(animals => {
                this.props.history.push("/animals");
                this.setState({ animals: animals });
            });
    deleteEmployee = id =>
        EmployeesManager.delete(id)
            .then(EmployeesManager.getAll)
            .then(employees => {
                this.props.history.push("/employees");
                this.setState({ employees: employees });
            });


    // deleteOwner = id => {
    //     return OwnersManager.delete(id)
    //         .then(() => OwnersManager.getAll())
    //         .then(owners =>
    //             this.setState({
    //                 owners: owners
    //             })
    //         );
    // };
    deleteOwner = id =>
        OwnersManager.delete(id)
            .then(OwnersManager.getAll)
            .then(owners => {
                this.props.history.push("/owners");
                this.setState({ owners: owners });
            });


    deleteLocation = id => {
        return LocationsManager.delete(id)
            .then(() => LocationsManager.getAll())
            .then(locations =>
                this.setState({
                    locations: locations
                })
            );
    };

    render() {
        return (
            <React.Fragment>
                <Route
                    exact
                    path="/"
                    render={props => {
                        return <LocationList locations={this.state.locations} />;
                    }}
                />
                <Route
                    exact
                    path="/animals"
                    render={props => {
                        return (
                            <AnimalList
                                {...props}
                                deleteAnimal={this.deleteAnimal}
                                animals={this.state.animals}
                            />
                        );
                    }}
                />

                {/* Our shiny new route. We pass employees to the AnimalForm so a dropdown can be populated */}
                <Route
                    path="/animals/new"
                    render={props => {
                        return (
                            <AnimalForm
                                {...props}
                                addAnimal={this.addAnimal}
                                employees={this.state.employees}
                            />
                        );
                    }}
                />

                <Route
                    path="/animals/:animalId(\d+)"
                    render={props => {
                        // Find the animal with the id of the route parameter
                        let animal = this.state.animals.find(
                            animal => animal.id === parseInt(props.match.params.animalId)
                        );

                        // If the animal wasn't found, create a default one
                        if (!animal) {
                            animal = { id: 404, name: "404", breed: "Dog not found" };
                        }

                        return (
                            <AnimalDetail animal={animal} deleteAnimal={this.deleteAnimal} />
                        );
                    }}
                />

                <Route
                    exact
                    path="/employees"
                    render={props => {
                        return (
                            <EmployeeList
                                deleteEmployee={this.deleteEmployee}
                                employees={this.state.employees}
                            />
                        );
                    }}
                />

                <Route
                    path="/employees/:employeeId(\d+)"
                    render={props => {
                        // Find the employee with the id of the route parameter
                        let employee = this.state.employees.find(
                            employee => employee.id === parseInt(props.match.params.employeeId)
                        );

                        // If the animal wasn't found, create a default one
                        if (!employee) {
                            employee = { id: 404, name: "404", phone: "employee not found" };
                        }

                        return (
                            <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
                        );
                    }}
                />


                <Route
                exact
                    path="/owners"
                    render={props => {
                        return (
                            <OwnerList
                                deleteOwner={this.deleteOwner}
                                owners={this.state.owners}
                            />
                        );
                    }}
                />

<Route
                    path="/owners/:ownerId(\d+)"
                    render={props => {
                        // Find the employee with the id of the route parameter
                        let owner = this.state.owners.find(
                            owner => owner.id === parseInt(props.match.params.ownerId)
                        );

                        // If the animal wasn't found, create a default one
                        if (!owner) {
                            owner = { id: 404, name: "404", phone: "employee not found" };
                        }

                        return (
                            <EmployeeDetail employee={owner} deleteOwner={this.deleteOwner} />
                        );
                    }}
                />




            </React.Fragment>
        );
    }
}
export default withRouter(ApplicationViews);
