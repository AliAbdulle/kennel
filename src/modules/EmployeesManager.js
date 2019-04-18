const apiURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${apiURL}/employees/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(`${apiURL}/employees`).then(r => r.json())
    },

    delete(id) {
        return fetch(`${apiURL}/employees/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    }
}
