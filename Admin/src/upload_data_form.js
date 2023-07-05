function UploadDataForm() {
    return(

        <div>
  <title>Upload Data</title>
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <center>
    <div className="table table-responsive">
      <h1>Upload Data</h1><table className="table table-bordered" Style={{width: '600px', height: '100%', marginTop: '100px'}}>
        <tbody><tr>
          </tr>
          <tr>
            <td>Enter Unique ID</td>
            <td>
              <input type="text" id="unique no" size="30px" placeholder="Enter ID here" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit" className="btn btn-primary btn-lg">Validate</button>
            </td>
          </tr>
        </tbody></table>
      <table className="table table-striped" border={1}>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Course</th>
            <th scope="col">Marks</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th scope="row">2</th>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th scope="row">3</th>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-primary btn-lg">Update</button>
    </div>
  </center>
</div>
    )
}
export default UploadDataForm;