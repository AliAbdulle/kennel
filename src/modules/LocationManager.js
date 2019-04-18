const apiURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${apiURL}/locations/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(`${apiURL}/locations`).then(r => r.json())
    },

    delete(id) {
        return fetch(`${apiURL}/locations/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    }
}