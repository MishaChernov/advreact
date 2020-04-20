import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderField } from '../FormControl/FormControls';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  };

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  };

  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 1) {
    errors.age = 'Sorry, you must be at least 1 years old';
  } else if (Number(values.age) > 130) {
    errors.age = 'Sorry, I do not believe';
  }

  return errors;
}

const warn = values => {
  const warnings = {};

  if (values.age < 10) {
    warnings.age = 'Hmm, you seem a bit young...';
  };

  return warnings;
}

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      {/* <Field name="firstName" type="text" component={RenderField} label="First name"/>
      <Field name="lastName" type="text" component={RenderField} label="Last name"/> */}
      <Field name="email" type="email" component={RenderField} label="Email" />
      <Field name="password" type="password" component={RenderField} label="Password" />
      {/* <Field name="age" type="number" component={RenderField} label="Age" /> */}

      <div className="registration-form__btn-wrapper">
        <button className="form-control__btn" type="submit" disabled={submitting}>
          Submit
        </button>
        <span className="form-control__btn-link" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </span>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'registrationForm',
  validate, 
  warn 
})(SyncValidationForm)