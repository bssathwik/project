// App.js
import React from 'react';
// import './Style.css'; // Import the CSS file for styles
import BookingSection from './components/BookingSection/BookingSection';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyComponent from './components/Homepage.css/MyComponent';

import SignOut from './components/Homepage.css/signout';
import { ForgotPassword } from './components/Homepage.css/forgotpass';
import { SignUp } from './components/Homepage.css/signup';
import Signin from './components/Homepage.css/signin';
import ExplorePrograms from './components/ExplorePrograms/ExplorePrograms';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
function App() {
    return (
      <>
      <div>
        <Router>
          <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<MyComponent />} />
          <Route path="/bookingsection" element={<BookingSection />} />
          <Route path="/explore" element={<ExplorePrograms />} />
          <Route path="/signout" element={<SignOut/>}/>
          <Route path="/forgotpass" element={<ForgotPassword/>} />
          <Route path="/webinar"element={<UpcomingEvents/>}/>
          {/* <Route path="/register"element={<LoginForm/>}/> */}
          
  
  
  </Routes>
    </Router>
      
      
      </div>
      
  
      
      </>
    );
  }
  export default App;