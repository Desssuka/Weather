import {makeAutoObservable} from "mobx";


class Auth {
    username: string = "Admin"
    password: string = "12345"
    isAuth: boolean = false
    constructor() {
        makeAutoObservable(this)
    }
    login(login?: string, password?: string){
        if(localStorage.getItem("isAuth")){
            this.isAuth = true
        }
        if(login === this.username && password === this.password){
            this.isAuth = true
            localStorage.setItem("isAuth", "true")
        }
    }
    logout(){
        this.isAuth = false
        localStorage.removeItem("isAuth")
    }
}

export default new Auth()