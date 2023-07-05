import { useHistory } from "react-router-dom";
import "./css/navbar.css";



function RegistrationNavbar(){
    const history = useHistory();
   const Navigate = (path)=>{
    
     history.push(path);
   }
    return( 
    
    
        <div className="table table-responsive">
          {/* <nav className="navbar navbar-default"> */}
            
              <div className="navbar-header">
                 <table className="table table-bordered"> 


                {/* <tr>
                    <td Style="width: 300px; "> */}
                <ul className="nav flex-column">
                    <li className="nav-item">
                      <button className="btn btn-info buttons" onClick={() => Navigate("/registration")}>Student Registration</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-info buttons" onClick={() => Navigate("/admission")}>New Admission</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-info buttons" onClick={() => Navigate("/upload")}>Uploaded Data</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-info buttons" onClick={() => Navigate("/edit")}>Edit Data Request</button>
                      </li>
                      <li className="nav-item">
                        <button className="btn btn-info buttons" onClick={() => Navigate("/withdraw")}>Withdraw</button>
                      </li>
                      <li className="nav-item">
                        <button className="btn btn-info buttons">Admission</button>
                      </li> 
                  </ul>
                {/* </td>
                </tr> */}
                </table>
            </div>
        
    
  
  {/* </nav> */}
 
 
</div>
    );
}
export default RegistrationNavbar;