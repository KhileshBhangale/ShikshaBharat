function Login(){
        return(
            <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6" Style="margin-top: 100px; max-width: 400px;">
                    <center>
                <h3 className="mb-3">Login</h3>
                    </center>
                <form>
                  <div className="form-group">
                    <label for="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                  </div>
                  <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password"/>
                  </div>
                  <center>
                  <button type="submit" className="btn btn-primary">Login</button>&nbsp;&nbsp;
                  <a type="submit" className="btn btn-danger" href="./Auth/otp.js">Forgot Password</a>
                  
                
                  </center>
                </form>
              </div>
            </div>
          </div>
        )
}
export default Login;