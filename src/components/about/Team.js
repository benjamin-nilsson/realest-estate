import React from "react";
import "./../../css/Team.css";

const Team = () => {
  return (
    <div className="background: #212529">
      <div className="realest">
        <h1>Meet The Realest</h1>
      </div>
      <div className="selfies">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img
              id="love"
              src="images/love.jpg"
              className="rounded-circle img-fluid"
              alt="love"
              style={{ outline: "5px solid white" }}
            ></img>
            <div className="infoBox">
              <h1>Love Hillblom</h1>
              <p>
                073 - 1337 01 <br></br>
                <a href="mailto:love@realest.estates.com" target="_blank">
                  love@realest.estates.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img
              id="nilsson"
              src="images/nilsson.jpg"
              className="rounded-circle img-fluid filter: grayscale(100%);"
              alt="nilsson"
              style={{ outline: "5px solid white" }}
            ></img>
            <div className="infoBox">
              <h1>Benjamin Nilsson</h1>
              <p>
                073 - 1337 02 <br></br>
                <a href="mailto:benjamin@realest.estates.com" target="_blank">
                  benjamin@realest.estates.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img
              id="banfi"
              src="images/banfi.jpg"
              className="rounded-circle img-fluid"
              alt="banfi"
              style={{ outline: "5px solid white" }}
            ></img>
            <div className="infoBox">
              <h1>Sebastian Banfi</h1>
              <p>
                073 - 1337 03 <br></br>
                <a href="mailto:sebastian@realest.estates.com" target="_blank">
                  sebastian@realest.estates.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img
              id="william"
              src="images/william.jpg"
              className="rounded-circle img-fluid"
              alt="william"
              style={{ outline: "5px solid white" }}
            ></img>
            <div className="infoBox">
              <h1>William Hökegård</h1>
              <p>
                073 - 1337 04 <br></br>
                <a href="mailto:william@realest.estates.com" target="_blank">
                  william@realest.estates.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
