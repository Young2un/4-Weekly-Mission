import React from "react";
import { ForwardedRef, forwardRef } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { FormData } from "../pages/input-sample";

interface FormFieldProps {
  type: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  error?: FieldError;
}

const FormField = forwardRef(
  (
    { type, placeholder, register, name, error }: FormFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          ref={ref}
        />
        {error && <p>{error.message}</p>}
      </>
    );
  }
);

export default FormField;
