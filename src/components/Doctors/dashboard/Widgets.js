import React from "react";

export default function Widgets() {
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="card dash-card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-4">
                <div class="dash-widget dct-border-rht">
                  
                  <div class="dash-widget-info">
                    <h6>Total Patient</h6>
                    <h3>1500</h3>
                    <p class="text-muted">Till Today</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="dash-widget dct-border-rht">
                  
                  <div class="dash-widget-info">
                    <h6>Today Patient</h6>
                    <h3>160</h3>
                    <p class="text-muted">06, Nov 2019</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="dash-widget">
                  
                  <div class="dash-widget-info">
                    <h6>Appoinments</h6>
                    <h3>85</h3>
                    <p class="text-muted">06, Apr 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
