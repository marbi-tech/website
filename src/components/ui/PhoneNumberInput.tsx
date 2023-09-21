import * as React from 'react';
import { PhoneInput, PhoneInputProps } from 'react-international-phone';

import clsxm from '@/utils/clsxm';

import 'react-international-phone/style.css';

interface PhoneNumberInputProps extends PhoneInputProps {
  className?: string;
  classNames?: {
    label?: string;
    phoneInput?: string;
    errorText?: string;
  };
  label?: string;
  id?: string;
  errorText?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  className,
  classNames,
  label,
  id,
  errorText,
  ...props
}) => {
  const inputId = React.useId();

  return (
    <div className={clsxm([className, errorText && 'error'])}>
      {/* LABEL */}
      {label && (
        <label
          className={clsxm([
            'mb-1.5 inline-block',
            'text-[#6E6B7B text-sm',
            classNames?.label,
          ])}
          htmlFor={id || inputId}
        >
          {label}
        </label>
      )}
      <PhoneInput
        defaultCountry='np'
        inputClassName={clsxm([
          'w-full !py-5 ',
          errorText && '!border-error-base',
        ])}
        className={clsxm(['w-full', classNames?.phoneInput])}
        {...props}
      />

      {/* ERROR TEXT */}
      {!!errorText && (
        <div
          className={clsxm(['text-sm text-error-base', classNames?.errorText])}
        >
          {errorText}
        </div>
      )}
    </div>
  );
};

export default PhoneNumberInput;
