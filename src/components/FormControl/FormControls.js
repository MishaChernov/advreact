import React from 'react';
import './form-control.scss';

const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => {

  return (
    <div className="form-control">
      <label className="form-control__label">
        <strong className="form-control__label-name">{label}:</strong>
        <input className="form-control__item" {...input} placeholder={label} type={type} />
      </label>
      {touched &&
        ((error && <strong className="form-control__error-msg">{error}</strong>) ||
        (warning && <b className="form-control__warn-msg">{warning}</b>))}
    </div>
  );
};

export {
  RenderField
};