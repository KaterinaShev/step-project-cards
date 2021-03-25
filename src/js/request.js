export default class Request {
    constructor(typeOfRequest, data, id) {
        if (typeOfRequest === "login") {
            return this.login(data);
        }
    }

    login(data) {
        return fetch('https://ajax.test-danit.com/api/v2/cards/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response)
        // .then(token => console.log(token))
    }
}




