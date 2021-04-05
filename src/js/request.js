export default class Request {
    constructor(typeOfRequest, data, id) {
        if (typeOfRequest === "login") {
            return this._login(data);
        }

        if (typeOfRequest === "post") {
            return this._post(data);
        }

        if (typeOfRequest === "put") {
            return this._put(data,id);
        }

        if (typeOfRequest === "delete") {
            return this._delete(data,id);
        }

        if (typeOfRequest === "getAllVisits") {
            return this._getAllVisits();
        }

    }

    _login(data) {
        return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(data => {
            if(!data.ok) {
                let errorNote = document.querySelector(".error-note");
                errorNote.style.visibility = "visible";
                errorNote.style.opacity = "1";
                throw new Error("Wrong email or password");
            } else {
                return data;
            }})
        .then(response => response.text())
        // .then(token => console.log(token))
    }

    _post(data) {
        return fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })
        .then(response => response);
    }

    _put(data,id) {
        return fetch("https://ajax.test-danit.com/api/v2/cards/"+ id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })
    }

    _delete(data,id) {
        return fetch("https://ajax.test-danit.com/api/v2/cards/"+ id, {
            method: "DELETE",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
    }

    _getAllVisits(){
        return fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            return response.json();
        })
    }

}




