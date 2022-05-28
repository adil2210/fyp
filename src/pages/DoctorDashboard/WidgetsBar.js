import React from "react";

export default function WidgetsBar(props) {
  const date = new Date();
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
                    <h3>{props.doctorRec.total_p}</h3>
                    <p class="text-muted">Till Today</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="dash-widget dct-border-rht">
                  
                  <div class="dash-widget-info">
                    <h6>Today Patient</h6>
                    <h3>{props.doctorRec.today_p}</h3>
                    <p class="text-muted">{date.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="dash-widget">
                  
                  <div class="dash-widget-info">
                    <h6>Appoinments</h6>
                    <h3>{props.doctorRec.appointment}</h3>
                    <p class="text-muted">{date.toLocaleString()}</p>
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
