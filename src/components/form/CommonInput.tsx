// CommonInput.tsx
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type CommonInputProps = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  isSubmitted: boolean;
  errors: any;
  watch?: any;
};

const CommonInput: React.FC<CommonInputProps> = ({
  type,
  placeholder,
  register,
  isSubmitted,
  errors,
  watch,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      aria-invalid={isSubmitted ? (errors ? 'true' : 'false') : undefined}
    />
    {errors && <p>{errors.message}</p>}
  </>
);

export default CommonInput;
