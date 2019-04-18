const apiURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${apiURL}/owners/${id}`).then(r => r.json())
    },

    getAll() {
        return fetch(`${apiURL}/owners`).then(r => r.json())
    },

    delete(id) {
        return fetch(`${apiURL}/owners/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
    }
}