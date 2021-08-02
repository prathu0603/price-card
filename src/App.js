import React from "react";
import "./app.css";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function App() {
  return (
    <div className="pricing py-5 bg-dark min-vh-100 min-vw-100 ">
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-4">
            <div className="card m-5">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  Free
                </h5>
                <h6 className="card-price text-center">
                  $0<span class="period">/month</span>
                </h6>
                <hr />
                <ul>
                  <li>
                    <FaCheck />
                    <p2>Single User</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>5GB Storage</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Unlimited Public Projects</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Community Access</p2>
                  </li>
                  <li className="text-muted">
                    <ImCross />
                    <p2>Unlimited Private Projects</p2>
                  </li>
                  <li className="text-muted">
                    <ImCross />
                    <p2>Dedicated Phone Support</p2>
                  </li>
                  <li className="text-muted">
                    <ImCross />
                    <p2>Free Subdomain</p2>
                  </li>
                  <li className="text-muted">
                    <ImCross />
                    <p2>Monthly Status Reports</p2>
                  </li>
                </ul>
                <div className="d-grid">
                  <button className="btn btn-success text-uppercase rounded-0">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card m-5">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  PLUS
                </h5>
                <h6 className="card-price text-center">
                  $9<span class="period">/month</span>
                </h6>
                <hr />
                <ul>
                  <li>
                    <FaCheck />
                    <p2>
                      <b>5 Users</b>
                    </p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>50GB Storage</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Unlimited Public Projects</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Community Access</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Unlimited Private Projects</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Dedicated Phone Support</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Free Subdomain</p2>
                  </li>
                  <li className="text-muted">
                    <ImCross />
                    <p2>Monthly Status Reports</p2>
                  </li>
                </ul>
                <div className="d-grid">
                  <button className="btn btn-success text-uppercase rounded-0">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card m-5">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  PRO
                </h5>
                <h6 className="card-price text-center">
                  $49<span class="period">/month</span>
                </h6>
                <hr />
                <ul>
                  <li>
                    <FaCheck />
                    <p2>
                      <b>Unlimited Users</b>
                    </p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>150GB Storage</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Unlimited Public Projects</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Community Access</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Unlimited Private Projects</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Dedicated Phone Support</p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>
                      {" "}
                      <b>Unlimited</b> Free Subdomain
                    </p2>
                  </li>
                  <li>
                    <FaCheck />
                    <p2>Monthly Status Reports</p2>
                  </li>
                </ul>
                <div className="d-grid">
                  <button className="btn btn-success text-uppercase rounded-0">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
