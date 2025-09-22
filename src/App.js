import logo from "./logo.svg";
import Navbar from "./components/header/Navbar";
import Section1 from "./pages/section1/Section1";
import Section2 from "./pages/section2/Section2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Tabs from "./pages/Tabs";
import Store from "./pages/AppStore/Store";
import StorePage from "./pages/AppStore/Store";
import PrivateRoute from "./middleware/Protected";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserAuthenticated } from "./redux/reducers/authReducer";
import Cookies from "js-cookie"
import Contact from "./pages/Contact/Contact";
import Keylogger from "./pages/keylogger/Keylogger";
import Support from "./pages/support/Support";
const hideNavbarRoutes = ["/login", "/register", "/forgot_password","/dashboard"];

function App() {
  const location = useLocation();
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  const dispatch = useDispatch();
 useEffect(() => {
  const token = Cookies.get("token");
  if(token){
    dispatch(setUserAuthenticated(true))
  }
 },dispatch)
  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      
      
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/" element={<Section1 />} />
         <Route path="/store" element={<Store />} />
         <Route path="/contact-us" element={<Contact />} />
         <Route path="/support-center" element={<Support />} />
         <Route path="/keylogger" element={<Keylogger />} />
         <Route path="/dashboard" element={
          <PrivateRoute>

            <Dashboard/>
          </PrivateRoute>
          
          } />
      </Routes> 
      <ToastContainer position="top-right" autoClose={3000} />
   

    </>
  );
}

export default App;
