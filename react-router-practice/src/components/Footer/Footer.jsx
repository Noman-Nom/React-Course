import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className="container my-">
      <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4">
        {/* Grid container */}
        <div className="container p-4">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">OUR WORLD</h5>

              <ul className="list-unstyled mb-4">
                <li>
                  <Link to="#!" className="text-white">About us</Link>
                </li>
                <li>
                  <Link to="#!" className="text-white">Collections</Link>
                </li>
                <li>
                  <Link to="#!" className="text-white">Environmental philosophy</Link>
                </li>
                <li>
                  <Link to="#!" className="text-white">Artist collaborations</Link>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Assistance</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="#!" className="text-white">Contact us</Link>
                </li>
                <li>
                  <Link to="#!" className="text-white">Size Guide</Link>
                </li>
                <li>
                  <Link to="#!" className="text-white">Shipping Information</Link>
                </li>
                <li>
                  <Link to="#!" className="text-white">Returns & Exchanges</Link>
                </li>
                <li>
                  <Link to="#!" className="text-white">Payment</Link>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Careers</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="#!" className="text-white">Jobs</Link>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>

              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example2" className="form-control" />
                <label className="form-label" htmlFor="form5Example2">Email address</label>
              </div>

              <button type="submit" className="btn btn-outline-white btn-block">Subscribe</button>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3 border-top border-white">
          © 2020 Copyright:
          <Link className="text-white" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
        </div>
        {/* Copyright */}
      </footer>
    </div>
    /* End of .container */
  );
}

export default Footer