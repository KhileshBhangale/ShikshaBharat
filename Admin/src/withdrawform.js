function WithdrawForm(){
    
    return(
        <div>
  <title>Transfer Student</title>
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <center>
    <div className="table table-responsive">
      <h1>Transfer Student</h1><table className="table table-bordered" style={{width: '600px', height: '100%', marginTop: '100px'}}>
        <tbody><tr>
          </tr>
          <tr>
            <td>Enter Unique ID</td>
            <td>
              <input type="text" id="unique no" size="30px" placeholder="Enter ID here" />
            </td>
          </tr>
          <tr>
            <td>Reuest Update</td>
            <td>
              <button type="submit" className="btn btn-primary btn-lg">Validate</button>
            </td>
          </tr>
        </tbody></table>
    </div>
    <table>
      <tbody><tr>
          <td>Student Status</td>
          <td>
            <input type="submit" value= "Relieve" className="btn btn-warning" defaultValue="Relieve" /> <span>      </span>
            <input type="submit" value= "Confirmation" className="btn btn-danger" defaultValue="Confirmation" />
          </td>
        </tr>
      </tbody></table>
  </center>
</div>
    )
}
export default WithdrawForm;