import React from "react";
import Logo from "../../assets/images/logo.png";


const PageOne = ({ onButtonClick }) => {
  return (
  
    <div className="text-center m-5-auto">
      {/* <h2>Join us</h2>
            <h5>Create your personal account</h5> */}
      <form action="/">
        {/* <img src={Icon} className="logoIcon" /> */}
        <div style={HeaderStyle}></div>
        <h5 className="title">Sign Up & Start Your Free Trial</h5>
        <p>
          <label className="input-label">First Name *</label>
          <br />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
        </p>
        <p>
          <label>Last Name *</label>
          <br />
          <input
            type="text"
            required
            name="last_name"
            placeholder="Last Name"
          />
        </p>
        <p>
          <button id="sub_btn" type="submit"
            value="Create Workspace"
            required
            onClick={() => onButtonClick("pagetwo")}
          >
            Next
          </button>
        </p>

        <p className="Already_account">
          Already have an account? <a href="">Login</a>
        </p>

      </form>

    </div>
  );
};

export default PageOne;


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
  
