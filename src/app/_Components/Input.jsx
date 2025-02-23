import React from 'react';
import styles from '../_Stylings/input.module.css';  // Import the styles

const InputField = ({
  type = 'text',
  label = '',
  name = '',
  value = '',
  placeholder = '',
  onChange,
  error = '',
}) => {
  return (
    <div className={styles['input-container']}>
      {label && <label htmlFor={name} className={styles['input-label']}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${styles['input-field']} ${error ? styles['input-error'] : ''}`}
      />
      {error && <span className={styles['error-text']}>{error}</span>}
    </div>
  );
};

export default InputField;
