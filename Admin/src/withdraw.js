import WithdrawForm from "./withdrawform";
import RegistrationNavbar from "./NavbarBox/registration_navbar";
function Withdraw(){
    return(
        <div className="table table-responsive">
        <table>
        <tr>
           <td><RegistrationNavbar/></td>
           <td Style="width:100%">
              
             <WithdrawForm></WithdrawForm>
  
           </td>
        </tr>
      </table>
        </div>
    )
}
export default Withdraw;