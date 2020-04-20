import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderField } from '../FormControl/FormControls';

import './login-form.scss';

const validate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  };
}

const LoginValidationForm = (props) => {
  const { handleSubmit, submitting } = props;

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Field type="text" name="email" component={RenderField} label="Email" placeholder="Please enter your email" />
      <Field type="password" name="password" component={RenderField} label="Password" placeholder="Please enter your password" />
      <button className="form-control__btn" disabled={submitting}>Login</button>
    </form>
  )
};

export default reduxForm({
  form: 'login-form',
  validate
})(LoginValidationForm);