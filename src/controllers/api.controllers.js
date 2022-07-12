class Api {
    static baseUrl = "https://habits-kenzie.herokuapp.com/api"
    static token = localStorage.getItem("@habits-kenzie:token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    // Requisição de Login
    static async login(loginData){
        return await fetch(`${this.baseUrl}/userLogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
            .then(res => {
                if (res.token) {
                    localStorage.setItem("@habits-kenzie:user", JSON.stringify(res.response))
                    localStorage.setItem("@habits-kenzie:token", JSON.stringify(res.token))
                }
                return res
        })
        .catch(err => console.log(err))
    }

    // Requisição de User
    static async updateProfile(content){
        return await fetch(`${this.baseUrl}/user/profile`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(content)
        })
        .then(res => res.json())  
        .then(res => res)
        .catch(err => console.log(err))
    }

    // Requisições de Habits 
    static async createHabit(habit){
        return await fetch(`${this.baseUrl}/habits`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(habit)
        })
        .then(res => res.json())  
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async readAllHabits(){
        return await fetch(`${this.baseUrl}/habits`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())  
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async readByCategory(category){
        return await fetch(`${this.baseUrl}/habits/category/${category}`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())  
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async updateHabit(idHabit, content){
        return await fetch (`${this.baseUrl}/habits/${idHabit}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(content)
        })
        .then(res => res.json())  
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async completeHabit(idHabit){
        return await fetch(`${this.baseUrl}/habits/complete/${idHabit}`, {
            method: "PATCH",
            headers: this.headers
        })
        .then(res => res.json())  
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async deleteHabit(idHabit){
        return await fetch(`${this.baseUrl}/habits/${idHabit}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.json())  
        .catch(err => console.log(err))
    }
}

export default Api
