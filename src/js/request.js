export default class Request {
    constructor(typeOfRequest, data, id) {
        if (typeOfRequest === "login") {
            return this.login(data);
        }
    }
    login(data) {
        return fetch('http://cards.danit.com.ua/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}