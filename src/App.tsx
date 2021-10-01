import s from './App.module.css'
import React, {FC, useEffect} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import WeatherPage from "./pages/weather/WeatherPage";
import Header from "./components/Header/Header";
import auth from "./store/auth";

const App: FC = () => {
    //is user authorized check
    useEffect(() => {
        auth.login()
    }, [])
  return (
      <div className={s.page}>
          <div>
              <Header />
          </div>
          <div className={s.container}>
              <Switch>
                  <Route exact path={'/'} render={() => <MainPage />}/>
                  <Route path={'/login'} render={() => <LoginPage />}/>
                  <Route path={'/profile'} render={() => <ProfilePage />} />
                  <Route path={'/weather/:cityId?'} render={() => <WeatherPage />} />
                  <Redirect to={'/'} />
              </Switch>
          </div>
      </div>
  );
}

export default App;
