import { BrowserRouter as Router} from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import HeadOffNavbar from "./NavbarBox/headoff_navbar";
import StudentRegistration from "./screens/student_registration";
import RegistrationNavbar from "./NavbarBox/registration_navbar";
import NewAdmission from "./screens/new_admission";
import EditData from "./screens/edit_data";
import UploadData from "./upload_data";
import Withdraw from "./withdraw";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Auth/login";

function Navbar() {
    var user = "RegistrationNavbar"
    if (user == "HeadOff") {
        
   } 
   else if (user == "RegistrationNavbar"){
        return (
          <Router>
               <Switch>
               <ProtectedRoute exact path="/dashboard" component={RegistrationNavbar}></ProtectedRoute>
               <ProtectedRoute exact path="/registration" component={StudentRegistration}></ProtectedRoute>
               <Route exact path="/login" component={Login}></Route>
               <Route exact path="/" component={Login}></Route>
               <ProtectedRoute exact path="/admission" component={NewAdmission}></ProtectedRoute>
               <ProtectedRoute exact path="/edit" component={EditData}></ProtectedRoute>
               <ProtectedRoute exact path="/upload" component={UploadData}></ProtectedRoute>
               <ProtectedRoute exact path="/withdraw" component={Withdraw}></ProtectedRoute>
               
               </Switch>
          </Router>
        );
   }
}

export default Navbar;