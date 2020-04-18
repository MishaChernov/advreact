import React from 'react';
import { FormInput } from '../FormControl/FormItems';
import './Register.scss';

const Register = (props) => {
  const { onLoginChange, onPasswordChange, login, password, handleClick, error } = props;

  return(
    <section className="register-page">
      <h1>Register</h1>

      <div className="register-form  register-page__form">
        <FormInput name="Login" error={error}>
          <input className="form-input__item" type="text" onChange={onLoginChange} name="login" value={login} placeholder="Please enter a login" />
        </FormInput>
        <FormInput name="Password" error={error}>
          <input className="form-input__item" type="password" onChange={onPasswordChange} name="password" value={password} placeholder="Please enter a password" />
        </FormInput>
        <hr/>

        <FormInput name="First name" error={error}>
          <input className="form-input__item" type="text" name="consumer-first-name"  placeholder="Please enter your first name" />
        </FormInput>
        <FormInput name="Last name" error={error}>
          <input className="form-input__item" type="text" name="consumer-last-name"  placeholder="Please enter your last name" />
        </FormInput>
        <hr/>

        <FormInput name="Country" error={error}>
          <input className="form-input__item" type="text" name="consumer-country"  placeholder="Please enter your country" />
        </FormInput>
        <FormInput name="City" error={error}>
          <input className="form-input__item" type="text" name="consumer-city"  placeholder="Please enter your city" />
        </FormInput>
        <button className="form-input__btn-submit" onClick={handleClick}>Register</button>
      </div>
    </section>
  )
}

export default Register;