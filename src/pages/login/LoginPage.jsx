import React, {useEffect, useState} from 'react';
import s from "./LoginPage.module.css"
import auth from "./../../store/auth"
import {observer} from "mobx-react-lite";
import {Redirect} from "react-router-dom";

const LoginPage = observer(() => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)
    useEffect(()=>{
    setShowError(false)
    }, [login, password])
    const pageEl = (auth.isAuth ? <Redirect to={"/"}/> : <div className={s.page}>
        <div className={s.card}>
            <div className={s.title}>
                Login page
            </div>
            <div className={s.form}>
                <input type="text" value={login} placeholder='login' onChange={(e)=> setLogin(e.target.value)}/>
                <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className={s.error}>
                {(showError ? "Имя пользователя или пароль введены не верно" : null)}
            </div>
            <div className={s.loginBtn}>
                <button onClick={() => {
                    auth.login(login, password)
                    if(!auth.isAuth){
                        setShowError(true)
                    }
                }}>Log In</button>
            </div>
        </div>
    </div>)
    return (
        pageEl
    );
});

export default LoginPage;