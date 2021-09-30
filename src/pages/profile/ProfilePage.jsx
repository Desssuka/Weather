import React from 'react';
import auth from './../../store/auth'
import {Redirect} from "react-router-dom";
import s from './ProfilePage.module.css'

const ProfilePage = () => {
    const pageEl = (auth.isAuth
            ? <div className={s.page}>
                <div className={s.title}>
                    Profile page
                </div>
                <div className={s.content}>
                    <div className={s.avatar}>
                        <img
                            src="https://sun1.ufanet.userapi.com/s/v1/ig2/D0s0MiS27PdOVNMg6FzHv0DagfzWGp4QBw3RYLYUbgKY3iEg44StQsKJ3PjOa1rPx0geX4FklQnWyYDq09P78oXN.jpg?size=200x200&quality=96&crop=193,320,219,220&ava=1"
                            alt=""/>
                    </div>
                    <div className={s.info}>
                        <div className={s.infoTitle}>
                            About me:
                        </div>
                        <div className={s.infoContent}>
                            <p>Name: Maksim</p>
                            <p>Surname: Kravchenko</p>
                            <p>Age: 19</p>
                            <p>Job: UFATECH ))</p>
                        </div>
                    </div>
                </div>
            </div>
            : <Redirect to={"/login"}/>
    )
    return (
        pageEl
    );
};

export default ProfilePage;