import React from "react";
import type { TextFieldProps } from "types/textfield.types";
export default function TextField({
  label,
  placeholder,
  type,
  value,
  name,
  onChange,
  onBlur,
  id,
  errors,
  className,
  InputProps,
  otherProps,
}: TextFieldProps) {
  return (
    <div className="mt-1">
      {label ? (
        <label htmlFor={label} className="labelStyle">
          {label}
        </label>
      ) : null}

      <div
        className={`${
          InputProps ? "input-group has-validation" : "has-validation"
        }`}
      >
        {InputProps ? (
          <span className="input-group-text">
            {InputProps ? InputProps : ""}
          </span>
        ) : null}
        <input
          type={type}
          className={`inputStyle ${className}`}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...otherProps}
          aria-describedby="inputGroupPrepend"
          required
        />
        {errors ? <span className="mt-2 text-red-500">{errors}</span> : null}
      </div>
    </div>
  );
}
