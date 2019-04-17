const apiURL = "http://localhost:5002/animal"

export default {
    get(id) {
        return fetch(`${apiURL}/animals/${id}`).then(r => r.json())
    }, 

    getAll() {
        return fetch(`${apiURL}/animals`).then(r => r.json())
    },

    delete(id) {
        return fetch(`${apiURL}/animal/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    },

    post(newAnimal) {
        return fetch(`${apiURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body:JSON.stringify(newAnimal)
        })
        .then(data => data.json())
    }

}