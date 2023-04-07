import React from "react";
import Logo from "../../assets/images/logo.png";

const PageThree = ({ onButtonClick }) => {
  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
    >
      <div className="text-center m-5-auto">
        <form action="/">
          {/* <img src={Icon} className="logoIcon" /> */}
          <div style={HeaderStyle}></div>
          <h5 className="title">Sign Up & Start Your Free Trial</h5>

          <p>
            <label>Role*</label>
            <br />
            <select name="role" id="cars" className="selectOption" >
              <option placeholder="Role" >Select Role</option>
              <option value="software">Software</option>
              <option value="education">Education</option>
              <option value="personal">Personal</option>
            </select>
          </p>

          <p>
            <label>Select your firm*</label>
            <br />
            <select name="select your firm" id="cars" className="selectOption" >
              <option placeholder="Select your firm" >Select your firm</option>
              <option value="university">University</option>
              <option value="schools">Schools</option>
              <option value="others">Others</option>
            </select>
          </p>

          <div class="d-flex justify-content-between next-back-btn-div">
            <button
              type="button"
              class="back-btn"
              value="Create Workspace"
              onClick={() => onButtonClick("pagetwo")}
            >
              <div class="site-btn-link">Back</div>
            </button>
            <button
              type="button"
              class="next-btn"
              value="Create Workspace"
              onClick={() => onButtonClick("pagefour")}
            >
              <div class="site-btn-link">Next</div>
            </button>
          </div>

          <p className="Already_account">
            Already have an account? <a href="">Login</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default PageThree;


const HeaderStyle = {
  //   width: "160.37px",
  height: "25PX",
  background: `url(${Logo})`,
  backgroundRepeat: "no-repeat",
  borderradius: "0px",
  marginBottom: "25px",
  marginLeft: "115px",
  marginTop: "30px",
};