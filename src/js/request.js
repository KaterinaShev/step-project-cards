export default class Request {
    constructor(typeOfRequest, data, id) {
        if (typeOfRequest === "login") {
            return this.login(data);
        }

        if (typeOfRequest === "post") {
            return this.post(data);
        }

        if (typeOfRequest === "put") {
            return this.put(data,id);
        }

        if (typeOfRequest === "delete") {
            return this.delete(data,id);
        }


        if (typeOfRequest === "getAllVisits") {
            return this.getAllVisits();
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
        .then(data => {
            if(!data.ok) {
                let errorNote = document.querySelector(".error-note");
                errorNote.style.visibility = 'visible';
                errorNote.style.opacity = "1";
                throw new Error("Wrong email or password");
            } else {
                return data;
            }})
        .then(response => response.text())
        // .then(token => console.log(token))
    }

    post(data) {
        return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })
        .then(response => response);
    }

    put(data,id) {
        return fetch('https://ajax.test-danit.com/api/v2/cards'+ id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })
    }

    delete(data,id) {
        return fetch('https://ajax.test-danit.com/api/v2/cards/'+ id, {
            method: "DELETE",
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    getAllVisits(){
        return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            return response.json();
        })
    }

}




