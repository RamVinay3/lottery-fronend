// src/components/Button.js
import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary', 'secondary', or 'disabled'
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant} ${disabled ? 'disabled' : ''}`}
    >
      {children}

      <style jsx>{`
        .button {
          display: inline-block;
          width: 100%;
          padding: 12px;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .primary {
          background-color: #F9A825; /* Yellow */
          color: #fff;
        }

        .primary:hover {
          background-color: #D4A017; /* Darker yellow */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        .secondary {
          background-color: #6B4423; /* Brown */
          color: #fff;
        }

        .secondary:hover {
          background-color: #8D5A2E; /* Lighter brown */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        .disabled {
          background-color: #E0E0E0; /* Light gray */
          color: #9E9E9E;
          cursor: not-allowed;
        }

        .button:disabled {
          background-color: #E0E0E0;
          color: #9E9E9E;
        }
      `}</style>
    </button>
  );
};

export default Button;
