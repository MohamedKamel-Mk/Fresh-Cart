import React from "react";
import logo from "../../Assets/images/amazonpay-logo-rgb-clr.svg";
import payment2 from "../../Assets/images/payment2.svg";
import payment3 from "../../Assets/images/payment3.svg";
import payment4 from "../../Assets/images/payment4.svg";
import appstore from "../../Assets/images/appstore.svg";
import googleplay from "../../Assets/images/googleplay.svg";

export default function Footer() {
  return (
    <div className="mt-4 bg-main-light pt-5 pb-5">
      <div className="container">
        <h4>Get the FreshCart app</h4>
        <p>
          We Will send you Link , open it on your phone to download the app.
        </p>
        <div className="footer-email">
          <form className="row">
            <input
              placeholder="Your email..."
              type="email"
              className="col-md-8 form-control ms-lg-4 me-3 w-75 mb-sm-3 mb-md-0 "
            />
            <button className="btn bg-main text-white col-md-2  ">
              Share App Link
            </button>
          </form>
        </div>
        <hr />
        <div className="payment d-flex justify-content-between pt-2">
          <div>
            <span>Payment partners </span>
            <span>
              <img src={logo} alt="" className="w-5" />
            </span>
            <span>
              <img src={payment2} alt="" className="w-5" />
            </span>
            <span>
              <img src={payment3} alt="" className="w-5" />
            </span>
            <span>
              <img src={payment4} alt="" className="w-5" />
            </span>
          </div>
          <div>
            <span className="pe-4">Get deliveries with FreshCart</span>
            <span>
              <img src={appstore} alt="" className="w-5 me-2" />
            </span>
            <span>
              <img src={googleplay} alt="" className="w-5" />
            </span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
