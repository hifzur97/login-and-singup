import React from "react";
import Logo from "../../assets/images/logo.png";

const PageTwo = ({ onButtonClick }) => {
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
            <label className="input-label">Email address*</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email address* "
              required
            />
          </p>
          <p>
            <label>Password*</label>
            <br />
            <input
              type="password"
              name="password* "
              placeholder="Password"
              required
            />
          </p>

          <p>
            <label>Confirm password *</label>
            <br />
            <input
              type="password"
              name="password* "
              placeholder="Confirm password"
              required
            />
          </p>

          <div class="d-flex justify-content-between next-back-btn-div">
            <button
              type="button"
              class="back-btn"
              value="Create Workspace"
              onClick={() => onButtonClick("pageone")}
            >
              <div class="site-btn-link">Back</div>
            </button>
            <button
              type="button"
              class="next-btn"
              value="Create Workspace"
              onClick={() => onButtonClick("pagethree")}
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

export default PageTwo;

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
