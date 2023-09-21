import React from 'react';

import clsxm from '@/utils/clsxm';
import useCombinedRefs from '@/hooks/useCombinedRefs';

//? USE: This is custom input used to input text

interface InputTextProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  classNames?: {
    label?: string;
    wrapper?: string;
    input?: string;
    errorText?: string;
    iconLeft?: string;
    iconRight?: string;
    helperText?: string;
  };
  focusedClassName?: string;
  focusedClassNames?: {
    label?: string;
    wrapper?: string;
    input?: string;
    errorText?: string;
    iconLeft?: string;
    iconRight?: string;
    helperText?: string;
  };
  errorText?: string | null | undefined;
  helperText?: string | null | undefined;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  wrapperRef?: React.RefObject<HTMLDivElement>;
  iconLeft?:
    | React.ComponentType<React.ComponentProps<'svg'>>
    | React.ComponentType;
  iconRight?:
    | React.ComponentType<React.ComponentProps<'svg'>>
    | React.ComponentType;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      focusedClassNames,
      classNames,
      className,
      focusedClassName,
      label,
      wrapperRef,
      iconLeft: IconLeft,
      iconRight: IconRight,
      onFocus,
      onBlur,
      id,
      size = 'md',
      helperText,
      errorText,
      ...props
    },
    forwardedRef,
  ) => {
    const inputFieldId = React.useId();

    const [isInputFocused, setIsInputFocused] = React.useState(false);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = useCombinedRefs(
      inputRef,
      forwardedRef as React.MutableRefObject<HTMLInputElement>,
    );

    //  ===== HANDLERS ==========
    const handleInputFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setIsInputFocused(true);
      onFocus && onFocus(e);
    };

    const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setIsInputFocused(false);
      onBlur && onBlur(e);
    };

    // set focus on input element on clicking wrapper
    const handleInputElementClick = () => {
      if (!combinedRef.current) return;
      combinedRef?.current?.focus();
    };

    return (
      <div className={clsxm([className, isInputFocused && focusedClassName])}>
        {/* LABEL */}
        {label && (
          <label
            className={clsxm([
              'mb-1.5 inline-block',
              'text-sm',
              props.disabled ? 'text-[#C5C4CA]' : 'text-[#6E6B7B]',
              classNames?.label,
              isInputFocused && focusedClassNames?.label,
            ])}
            htmlFor={id || inputFieldId}
          >
            {label}
          </label>
        )}

        {/* WRAPPER */}
        <div
          ref={wrapperRef}
          className={clsxm([
            'relative flex w-full items-center  overflow-hidden',
            'border',
            'after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-full',

            // SIZE STYLES FOR PADDING
            size === 'sm' && ['px-1.5 py-[0.563rem]', 'rounded-lg', 'gap-1'],
            size === 'md' && ['px-4 py-3.5', 'rounded-md', 'gap-2.5'],
            size === 'lg' && ['px-4.5 py-4', 'rounded-md', 'gap-2.5'],

            // DISABLED AND FOCUS STATES
            props.disabled
              ? 'text-text-disabled'
              : [
                  isInputFocused
                    ? 'border-black-100'
                    : errorText
                    ? 'border-error-base'
                    : 'border-black-10 hover:border-black-20',
                ],
            isInputFocused && focusedClassNames?.wrapper,
            classNames?.wrapper,
          ])}
          onClick={handleInputElementClick}
        >
          {/* LEFT ICON */}
          {IconLeft && (
            <IconLeft
              className={clsxm([
                'pointer-events-none inline-block shrink-0',
                // size
                size === 'sm' && 'h-4 w-4',
                size === 'md' && 'h-6 w-6',
                size === 'lg' && 'h-6 w-6',
                classNames?.iconLeft,
                isInputFocused && focusedClassNames?.iconLeft,
              ])}
            />
          )}

          <input
            {...props}
            ref={combinedRef}
            id={id || inputFieldId}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={clsxm([
              'placeholder:text-text-placeholder shrink-0 grow bg-transparent outline-none',
              'font-normal ',
              // FONT SIZES
              size === 'sm' && 'text-sm leading-[1.42]',
              size === 'md' && 'text-[0.938rem] leading-[1.33]',
              size === 'md' && 'text-[1rem] leading-[1.33]',

              classNames?.input,
              isInputFocused && focusedClassNames?.input,
            ])}
          />
          {/* LEFT RIGHT */}
          {IconRight && (
            <IconRight
              className={clsxm([
                'pointer-events-none inline-block shrink-0',
                // size
                size === 'sm' && 'h-4 w-4',
                size === 'md' && 'h-6 w-6',
                size === 'lg' && 'h-6 w-6',
                classNames?.iconLeft,
                isInputFocused && focusedClassNames?.iconRight,
              ])}
            />
          )}
        </div>

        {/* ERROR TEXT */}
        {errorText ? (
          <div
            className={clsxm([
              'text-error-base mt-1.5 text-sm',
              classNames?.errorText,
              isInputFocused && focusedClassNames?.errorText,
            ])}
          >
            {errorText}
          </div>
        ) : (
          !!helperText && (
            <div
              className={clsxm([
                'mt-1.5 text-sm text-[#667085]',
                classNames?.helperText,
                isInputFocused && focusedClassNames?.helperText,
              ])}
            >
              {helperText}
            </div>
          )
        )}
      </div>
    );
  },
);

export type { InputTextProps };
export { InputText };
