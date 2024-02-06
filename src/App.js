import "./App.css";
import LoginForm from "./components/Driver UI/LoginForm&SignUp/LoginForm";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Driver UI/LoginForm&SignUp/Signup";
import Homepage from "./components/Homepage/Homepage";
import LocationTime from "./components/Driver UI/Location&Time/Location&Time";
import DriverHomepage from "./components/Driver UI/DriverHomepage/DriverHomepage";
import RatingsTable from "./components/Driver UI/RatingsTable/RatingsTable";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/driverlogin" element={<LoginForm />} />
        <Route exact path="/driverregister" element={<SignUp />} />
        <Route exact path="/driverhomepage" element={<DriverHomepage />} />
      </Routes>
    </div>
  );
}

export default App;
