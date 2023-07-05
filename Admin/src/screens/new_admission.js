import "./css/student_registration.css";
import RegistrationNavbar from "../NavbarBox/registration_navbar";
import NewAdmissionForm from "./newaddform";
function NewAdmission() {
   return(
    <>
   
      <div className="table table-responsive">
      <table>
      <tr>
         <td><RegistrationNavbar/></td>
         <td Style="width:100%">
            
           <NewAdmissionForm></NewAdmissionForm>

         </td>
      </tr>
    </table>
      </div>
   
    
  
    </>
   ) 

}

export default NewAdmission;