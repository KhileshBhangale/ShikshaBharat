import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function StudentRegForm(){
    return(
      
        
        <div className="container" >
            <div className="py-5 text-center">
              
              <h2>Student Registration form</h2>
              <p className="lead"></p>
            </div>
          
            <div className="row">
              
              <div className="col-md-12 order-md-3">
                <h4 className="mb-3"></h4>
                
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label for="firstName">First name*</label>
                      <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                      <div className="col-md-4 mb-3">
                        <label for="firstName">Middle name*</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="lastName">Last name*</label>
                      <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>
    
                  <div Style="align-content: center;">
                    <form className="needs-validation" novalidate>
                      <div className="row">
                        <div className="col-md-3 mb-3">
                          <label for="dateofbirth">Date of Birth*</label>
                          <input type="date" className="form-control" id="dob" placeholder="" value="" required/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="Blood Group">Age</label>
                            <input type="number" className="form-control" id="age" placeholder="" value="" readonly/>
                            <div className="invalid-feedback">
                              Valid name is required.
                            </div>
                    </div>
    
                    <div className="col-md-3 mb-3">
                            <label for="Gender">Gender</label>
                      <select className="custom-select d-block w-75" id="gender" required>
                        <option value="">Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid Gender.
                      </div>    
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="Blood Group">Blood Group</label>
                            <input type="text" className="form-control" id="bloodgroup" placeholder="" value=""/>
                            <div className="invalid-feedback">
                              Valid name is required.
                            </div>
                    </div>
                    </div>
                    </form>
                </div>
                </div>   
    
    
    
                  <div Style="align-content: center;">
                    <form className="needs-validation" novalidate>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label for="firstName">Father's Name*</label>
                          <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                          <div className="invalid-feedback">
                            Valid name is required.
                          </div>
                        </div>
                          <div className="col-md-6 mb-3">
                            <label for="firstName">Mother's Name*</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                            <div className="invalid-feedback">
                              Valid name is required.
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                      
          
                  
          
                 
          
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label for="country">Country*</label>
                      <select className="custom-select d-block w-100" id="country" required>
                        <option value="">Choose...</option>
                        <option>India</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="state">State*</label>
                      <select className="custom-select d-block w-100" id="state" required>
                        <option value="">Choose...</option>
                        <option>Maharashtra</option>
                        <option>Madhya Pradesh</option>
                        <option>Delhi</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="state">District*</label>
                        <select className="custom-select d-block w-100" id="district" required>
                          <option value="">Choose...</option>
                          <option>District</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid district.
                        </div>
                      </div>
                    
                  </div>
                  <div className="mb-3">
                    <label for="address">Permanent Address*</label>
                    <input type="text" className="form-control" id="address" placeholder="" required/>
                    <div className="invalid-feedback">
                      Please enter your valid Permanent address.
                    </div>
                  </div>
          
                  <div className="mb-3">
                    <label for="address2">Correspondance Address*<span className="text-muted"></span></label>
                    <input type="text" className="form-control" id="address2" placeholder="" required/>
                  </div>
    
                  
                  
                  <div className="row">
                    <div className="col-md-9 mb-3">
                        <label for="email">Email*<span className="text-muted"></span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                          Please enter a valid email.
                        </div>
                    </div>
                        <div className="col-md-3 mb-3">
                          <label for="Contact">Contact*</label>
                          <input type="text" className="form-control" id="contact" placeholder="" required/>
                          <div className="invalid-feedback">
                            Contact number is required.
                          </div>
                        </div>
                  </div>
                  
                  </div>
    
    
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label for="country">Religion*</label>
                      <select className="custom-select d-block w-100" id="religion" required>
                        <option value="">Choose...</option>
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Chritian</option>
                        <option>Sikh</option>
                        <option>Other Minorities</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid religion.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="state">Category*</label>
                      <select className="custom-select d-block w-100" id="category" required>
                        <option value="">Choose...</option>
                        <option>General</option>
                        <option>OBC</option>
                        <option>SC</option>
                        <option>ST</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="state">Mother tounge*</label>
                        <select className="custom-select d-block w-100" id="mothertounge" required>
                          <option value="">Choose...</option>
                          <option>Hindi</option>
                          <option>Mararthi</option>
                          <option>Gujrati</option>
                          <option>Punjabi</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid district.
                        </div>
                      </div>
                  </div>
    
    
                  <hr className="mb-4"/>
                  
                  <hr className="mb-4"/>
          
                 
          
                  <div className="d-block my-3">
                   
                    
                  </div>
                  
                  <div className="row">
                     <center> 
                        <label for="registrationdate">Aadhar Card*</label>
                          <input type="text" className="" id="aadharcard" placeholder="" value="" required/>
                          &nbsp;
                        <label for="registrationdate">Date of Registration*</label>
                          <input type="date" className="" id="dateofregistration" placeholder="" value="" required/>
                     </center> 
                </div>
                  
                   
                    <hr className="mb-4"/>
                    <div className="row" Style="justify-content: center;">
                        <div className="col-md-4 mb-3">
                            <button className="btn btn-primary btn-lg btn-block" Style="align-content: center;" type="submit">Continue to checkout</button>
                        </div>
                    </div>
                    
                    <div>
                  </div>
                  
              </div>
             
    );
}

export default StudentRegForm;