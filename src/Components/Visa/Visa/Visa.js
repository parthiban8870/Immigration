import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Visa.css";

function Visa() {
  return (
    <div>
      <section id="education">
        <div className="container my-5">
          <div className="text-center">
            <p className="text-uppercase h4 rounded-5 p-2">
              What type of visa are you looking for?
            </p>
            <div className="h5 p-2 rounded-5">
              <p>
                We are a team of immigration specialists guiding individuals,
                families and corporates who aspire to migrate to Australia.
              </p>
              <p>
                Our migration consultancy has a successfull track record in visa
                approval with a fair fee structure.
              </p>
            </div>
          </div>

          <div className="row row-cols-lg-5 row-cols-1  my-5">
            <div className="col">
              <div class="card" id="card-1">
                <img
                  src={require("./1.png")}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">SKILLED WORKERS</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" id="card-2">
                <img
                  src={require("./2.png")}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">INVESTORS</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" id="card-3">
                <img
                  src={require("./3.png")}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">BUSINESS CLASS IMMIGRATION</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" id="card-4">
                <img
                  src={require("./4.png")}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">STUDENT VISAS</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" id="card-5">
                <img
                  src={require("./5.png")}
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">VISITOR VISAS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visa;