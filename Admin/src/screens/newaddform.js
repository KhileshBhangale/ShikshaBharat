function NewAdmissionForm(){
    return(
        
    <section class="vh-100" Style="background-color:white;">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9">
      
              <h1 class="text-white mb-4">New Admission</h1>
      
              <div class="card" Style="border-radius: 15px;">
                <div class="card-body">
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Enter Unique ID</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="Unique No" placeholder="Enter ID here"  />

                      <br/> 
      
                    </div>
                  </div>

                  <div class="px-5 py-4">
                    <button type="submit" class="btn btn-primary btn-lg">Add Student</button>
                  </div>
      
                  <hr class="mx-n3"/>
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Enter PRN</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="PRN No" placeholder="Enter PRN here" />

                      <br/>
      
                    </div>
                  </div>
      
                  <hr class="mx-n3"/>
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Class / Course</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="course" placeholder="Enter Course Here" />
                       <br/>

                    </div>
                  </div>

                  <div class="px-5 py-4">
                    <button type="submit" class="btn btn-primary btn-lg">Add Student</button>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </section>
   
    )
}

export default NewAdmissionForm;