import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/Resetpassword";
import ModulePage from "./pages/ModulePage";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";

// homes components
import Homes from "./pages/Homes";
import HomesDashboard from "./components/Homes/HomesDashboard";
import HomesInvestments from "./components/Homes/HomesInvestments";
import HomesMyInvestments from "./components/Homes/HomesMyInvestments";
import HomesPurchase from "./components/Homes/HomesPurchase";
import HomesTopUp from "./components/Homes/HomesTopUp";
// homes components

// properties components
import Properties from "./pages/Properties";
import PropertiesDashboard from "./components/Properties/PropertiesDashboard";
import AllProperties from "./components/Properties/AllProperties";
import MyProperties from "./components/Properties/MyProperties";
import PropertiesPurchase from "./components/Properties/PropertiesPurchase";
import PropertyTopUp from "./components/Properties/PropertyTopUp";
// properties components

import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="bg-[#e5e5e5] ">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="modulePage" element={<ModulePage />} />
          <Route path="signUp" element={<SignupForm />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="homes" element={<Homes />}>
            <Route index exact element={<HomesDashboard />} />
            <Route path="homesInvestments" element={<HomesInvestments />} />
            <Route path="homesInvestments/:id" element={<HomesPurchase />} />
            <Route path="homesMyInvestments" element={<HomesMyInvestments />} />
            <Route path="homesMyInvestments/:id" element={<HomesTopUp />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="properties" element={<Properties />}>
            <Route index exact element={<PropertiesDashboard />} />
            <Route path="allProperties" element={<AllProperties />} />
            <Route path="allProperties/:id" element={<PropertiesPurchase />} />
            <Route path="myProperties" element={<MyProperties />} />
            <Route path="myProperties/:id" element={<PropertyTopUp />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
