import React from "react";
import Logo from "../../assets/images/logo.png";

const PageFour = ({ onButtonClick }) => {
  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
    >
      <div className="text-center m-5-auto">
        <form action="/" className="formFour">
          {/* <img src={Icon} className="logoIcon" /> */}
          <div style={HeaderStyle}></div>
          <h5 className="title">Sign Up & Start Your Free Trial</h5>

          <p>
            <label className="input-label">Street </label>
            <br />
            <input type="text" name="street" placeholder="Street" required />
          </p>

          <p>
            <label>Street 2</label>
            <br />
            <input
              type="text"
              name="Street 2"
              placeholder="Street 2"
              required
            />
          </p>

          <div class="wrapper">
            <div>
              <p>
                <label className="input-label label_right">City</label>
                <br />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="input_right"
                  required
                />
              </p>
            </div>
            <div>
              <p>
                <label className="input-label label_left">
                  State / Province
                </label>
                <br />
                <input
                  type="text"
                  name="state/province"
                  placeholder="State / Province"
                  className="input_left"
                  required
                />
              </p>
            </div>
          </div>

          <p>
            <label>Country *</label>
            <br />
            <select name="country" id="cars" className="selectOption">
              <option value="india">India</option>
              <option value="dubia">Dubai</option>
              <option value="uea">UEA</option>
              <option value="kuwait">Kuwait</option>
            </select>
          </p>


          <p>
            <label>Zip / Postal Code *</label>
            <br />
            <input
              type="text"
              name="Street 2"
              placeholder="Zip / Postal Code *"
              required
            />
          </p>

          <div class="d-flex justify-content-between next-back-btn-div">
            <button
              type="button"
              class="back-btn"
              value="Create Workspace"
              onClick={() => onButtonClick("pagethree")}
            >
              <div class="site-btn-link">Back</div>
            </button>
            <button
              type="button"
              class="next-btn"
              value="Create Workspace"
              disabled
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

export default PageFour;

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
