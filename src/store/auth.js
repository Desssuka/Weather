import {makeAutoObservable} from "mobx";


class Auth {
    username = "Admin"
    password = "12345"
    isAuth = false
    showError = false
    constructor() {
        makeAutoObservable(this)
    }
    login(login, password){
        if(localStorage.getItem("isAuth")){
            this.showError = false
            return this.isAuth = true
        }
        if(login === this.username && password === this.password){
            this.showError = false
            this.isAuth = true
            return localStorage.setItem("isAuth", "true")
        }
        this.showError = true
    }
    logout(){
        this.isAuth = false
        localStorage.removeItem("isAuth")
    }
}

export default new Auth()