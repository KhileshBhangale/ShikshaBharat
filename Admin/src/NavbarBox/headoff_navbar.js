import { useHistory } from "react-router-dom";
import "./css/navbar.css";
function HeadOffNavbar(){
    const history = useHistory();
   const Navigate = (path)=>{
    
     history.push(path);
   }
   
    return(
        <div className="table table-responsive">
       
          
            <div className="navbar-header">
               <table className="table table-bordered"> 


             
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
                      <button className="btn btn-info buttons">Pending Request</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-info buttons">More Option</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-info buttons">Desk Details</button>
                    </li> 
                </ul>
              
              </table>
          </div>
      
  




</div>
    );
    
}

export default HeadOffNavbar;