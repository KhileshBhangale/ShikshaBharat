import ReactDOM from 'react-dom/client';
import RegInstitute from "../Admin/reg_institute";
import Navbar from "../navbar";
function AdminNavbar() {
    const screen = ReactDOM.createRoot(document.getElementById('screen'));
   
    return(
        <>
            <button type="button" className="btn btn-default" onClick={()=>screen.render(<RegInstitute/>)}>Register Institute</button>
            <button type="button" className="btn btn-default" onClick={()=>screen.render(<Navbar/>)}>De-register Institute</button>
            <button type="button" className="btn btn-default">View Institute</button>
        </>
    );
    
}



export default AdminNavbar;