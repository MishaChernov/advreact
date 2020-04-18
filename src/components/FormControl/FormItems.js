import React from 'react';
import './form-control.scss';

const FormInput = (props) => {
  const { name, error } = props;

  return (
    <div className="form-input">
      <label className="form-input__label">
        <strong className="form-input__label-name">{name}:</strong>
        {props.children}
      </label>
      {error && <span className="form-input__error-msg">{error}</span>}
    </div>
  );
}

export {
  FormInput
};