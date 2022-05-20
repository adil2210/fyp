import React from "react";

export default function ContactInfo() {
  return (
    <div>
      <div class="card contact-card">
        <div class="card-body">
          <h4 class="card-title">Contact Details</h4>
          <div class="row form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Address Line 1</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">Address Line 2</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">City</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">State / Province</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">Country</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">Postal Code</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
