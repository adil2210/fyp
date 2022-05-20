import React from "react";

export default function Experience() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Experience</h4>
          <div className="experience-info">
            <div className="row form-row experience-cont">
              <div className="col-12 col-md-10 col-lg-11">
                <div className="row form-row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Hospital Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>From</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>To</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Designation</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="add-more">
            <a href="javascript:void(0);" className="add-experience">
              <i className="fa fa-plus-circle"></i> Add More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
