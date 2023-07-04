import React from 'react';
import './App.css';
import  HomePage from './Pages/homePage';
import { Route, Routes } from 'react-router-dom';
import EventPage from './Pages/eventpage';
import FriendsPage from './Pages/friendspage';
import Profile from './Pages/profile';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'element={<HomePage/>}/>
      <Route path='/homePage'element={<HomePage/>}/>
      <Route path='/eventpage'element={<EventPage/>}/>
      <Route path='/friendspage'element={<FriendsPage/>}/>
      <Route path='/profile'element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
