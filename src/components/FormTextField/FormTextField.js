import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import s from './FormTextField.module.css';

const FormTextField = ({ label, name, value, onChange, placeholder, required, type, title, pattern }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={s.block}>
      <input
        className={s.input}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        title={title}
        pattern={pattern}
      />
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormTextField;

FormTextField.defaultProps = {
  type: 'text',
  required: false,
};
