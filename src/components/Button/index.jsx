// src/components/Button.jsx
import React from 'react';

const Button = ({ text, onClick }) => (
  <div className="w-full flex justify-center mt-5">
    <button
      className="all-[unset] box-border inline-flex items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] bg-[color:var(--color-background-brand-default)] rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-brand-default cursor-pointer"
      onClick={onClick}
    >
      <span className="box-border relative w-fit mt-[-1.00px] text-color-text-brand-on-brand text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
        {text}
      </span>
    </button>
  </div>
);

export default Button;
