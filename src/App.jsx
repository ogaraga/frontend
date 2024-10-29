import {Route, Routes } from "react-router-dom";
import "./App.css";
import JoinNow from "./component/joinnow/JoinNow";
import ForgotPassword from "./component/forgot/ForgotPassword";
import Profile from "./component/profile/Profile";
import ResetPass from "./component/resetpass/ResetPass";
import ErrorPage from "./component/errorrouting/ErrorPage";
import HomeProfile from "./component/profile/HomeProfile";
import News from "./component/profile/News";
import ContactUs from "./component/contactUs/ContactUs";
import SignIn from './component/login/SignIn';
import LandingPage from './component/landingpage/LandingPage'
function App() {
  
  return (
    <>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signin" element={<SignIn/>}  />
          <Route path="/joinnow" element={<JoinNow />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/profile/:_id/:token" element={<Profile />}/>          
          <Route path="/resetpass/:email/:token" element={<ResetPass />}/>
          <Route path="/profile/home/:_id/:token" element={<HomeProfile />}/>
          <Route path="/profile/news/:_id/:token" element={<News/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="*" element ={<ErrorPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
