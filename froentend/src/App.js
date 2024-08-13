// App.js

import React from 'react';


// import './Style.css'; // Import the CSS file for styles

import BookingSection from './components/BookingSection/BookingSection';
import ExplorePrograms from './components/ExplorePrograms/ExplorePrograms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from './components/signin';
import MyComponent from './components/MyComponent';
import { SignUp } from './components/signup';
import SignOut from './components/signout';
import { ForgotPassword } from './forgotpass';
function App() {
    return (
      <>
      <div>
        <Router>
          <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/" element={<MyComponent />} />
          {/* <Route path="/login" element={<toggleLogin/>} /> */}
          <Route path="/bookingsection" element={<BookingSection />} />
          <Route path="/explore" element={<ExplorePrograms />} />
          <Route path="/signout" element={<SignOut/>}/>
          <Route path="/forgotpass" element={<ForgotPassword/>} />
          {/* <Route path="/home1" element={<Home1 />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/CalorieCalculator" element={<CalorieCalculator/>}/>
          <Route path="/HydrationCalculator" element={<HydrationCalculator/>}/>
          <Route path="/MacronutritionCalculator" element={<MacronutrientCalculator/>}/>
          <Route path="/nutrition" element={<NutritionInfoPage/>}/>
          {/* <Route path="/about" element={<Menu/>}/> */}
          {/*<Route path="/addmeal" element={<HomePage/>}/>
          <Route path="/result" element={<ResultPage/>}/> */} 
  
  
  </Routes>
    </Router>
      
      
      </div>
  
      
      </>
    );
  }
  
  export default App;