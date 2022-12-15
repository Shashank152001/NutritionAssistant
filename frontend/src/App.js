import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Header from "./Components/Header";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import MyDiary from './Components/MyDiary';
import NutriSearch from './Components/NutriSearch';
import Registration from './Components/Registration';
import Servicess from './Components/Servicess';
import TrackingActivity from './Components/TrackingActivity';
import Userdashboard from './Components/Userdashboard';
import UserProfile from './Components/UserProfile';

import { LoginContext } from './LoginContext'

function App() {
  const [userLoginName, setuserLoginName] = useState(localStorage.getItem('userLoginName'))
  const [userLoginStatus, setuserLoginStatus] = useState(localStorage.getItem('userLoginStatus'))

  return (
    <Router>
      <LoginContext.Provider value={{ userLoginName, setuserLoginName, userLoginStatus, setuserLoginStatus }}>
        <Header />
        <Routes>
          <Route element={<Homepage />} path="/"></Route>
          <Route element={<AboutUs/>} path='/aboutus'></Route>
          <Route element={<Servicess/>} path='/services'></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Registration />} path="/reg"></Route>
          <Route element={<Userdashboard/>} path='/userdashboard'></Route>
          <Route element={<NutriSearch/>} path='/nutrisearch'></Route>
          <Route element={<TrackingActivity/>} path='/trackingactivity'></Route>
          <Route element={<UserProfile/>} path='/profile'></Route>
          <Route element={<MyDiary/>} path='/mydiary'></Route>
          
        </Routes>

      </LoginContext.Provider>
    </Router>
  );
}

export default App;