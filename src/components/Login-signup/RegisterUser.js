import React, {useState} from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
  name: '',
  phoneNumber: '',
  password: '',
};
const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  phone: Yup.string().required('Required!'),
  password: Yup.string().required('Required!')
});

export default function RegisterUser() {
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, onSubmitProps) => {
        console.log('from on submit fun', values);
        console.log(values)
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    }
});


  const st = {
    minHeight: "205px",
  };
  return (
    <div class="content" style={st}>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="account-content">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-7 col-lg-6 login-left">
                  <img
                    src="assets/img/login-banner.png"
                    class="img-fluid"
                    alt="Doccure Register"
                  />
                </div>
                <div class="col-md-12 col-lg-6 login-right">
                  <div class="login-header">
                    <h3>
                      User Register{" "}
                    </h3>
                  </div>

                  <form onSubmit={formik.handleSubmit}>
                    <div class="form-group form-focus">
                      <input type="text" class="form-control floating" name='name' {...formik.getFieldProps('name')} required/>
                      <label class="focus-label">Name</label>
                    </div>
                    <div class="form-group form-focus">
                      <input type="text" class="form-control floating" name='phone' {...formik.getFieldProps('phone')} required/>
                      <label class="focus-label">Mobile Number</label>
                    </div>
                    <div class="form-group form-focus">
                      <input type="password" class="form-control floating" name='password' {...formik.getFieldProps('password')} required/>
                      <label class="focus-label">Create Password</label>
                    </div>
                    <div class="text-right">
                      <a class="forgot-link" href="login.html">
                        Already have an account?
                      </a>
                    </div>
                    <button
                      class="btn btn-primary btn-block btn-lg login-btn"
                      type="submit"
                    >
                      Signup
                    </button>
                    <div class="login-or">
                      <span class="or-line"></span>
                      <span class="span-or">or</span>
                    </div>
                    <div class="row form-row social-login">
                      <div class="col-6">
                        <a href="#" class="btn btn-facebook btn-block">
                          <i class="fab fa-facebook-f mr-1"></i> Login
                        </a>
                      </div>
                      <div class="col-6">
                        <a href="#" class="btn btn-google btn-block">
                          <i class="fab fa-google mr-1"></i> Login
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
