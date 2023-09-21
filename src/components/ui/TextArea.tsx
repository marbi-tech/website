import React from 'react';

import clsxm from '@/utils/clsxm';
import useCombinedRefs from '@/hooks/useCombinedRefs';

//? USE: This is custom input used to input text

interface TextAreaProps extends React.ComponentPropsWithRef<'textarea'> {
  classNames?: {
    label?: string;
    wrapper?: string;
    textarea?: string;
    errorText?: string;
    iconLeft?: string;
    iconRight?: string;
  };
  focusedClassName?: string;
  focusedClassNames?: {
    label?: string;
    wrapper?: string;
    textarea?: string;
    errorText?: string;
    iconLeft?: string;
    iconRight?: string;
  };
  errorText?: string | null | undefined;
  label?: string;
  iconLeft?:
    | React.ComponentType<React.ComponentProps<'svg'>>
    | React.ComponentType;
  iconRight?:
    | React.ComponentType<React.ComponentProps<'svg'>>
    | React.ComponentType;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      focusedClassNames,
      classNames,
      className,
      focusedClassName,
      label,
      iconLeft: IconLeft,
      iconRight: IconRight,
      onFocus,
      onBlur,
      id,
      errorText,
      ...props
    },
    forwardedRef,
  ) => {
    const inputFieldId = React.useId();

    const [isInputFocused, setIsInputFocused] = React.useState(false);

    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    const combinedRef = useCombinedRefs(
      inputRef,
      forwardedRef as React.MutableRefObject<HTMLTextAreaElement>,
    );

    //  ===== HANDLERS ==========
    const handleInputFocus: React.FocusEventHandler<HTMLTextAreaElement> = (
      e,
    ) => {
      setIsInputFocused(true);
      onFocus && onFocus(e);
    };

    const handleInputBlur: React.FocusEventHandler<HTMLTextAreaElement> = (
      e,
    ) => {
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
          className={clsxm([
            'relative flex w-full items-center gap-2.5 overflow-hidden rounded-md',
            'border px-4 py-3.5',
            'after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-full',
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
                classNames?.iconLeft,
                isInputFocused && focusedClassNames?.iconLeft,
              ])}
            />
          )}

          <textarea
            {...props}
            ref={combinedRef}
            id={id || inputFieldId}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={clsxm([
              'placeholder:text-text-placeholder shrink-0 grow resize-none bg-transparent outline-none',
              'text-[0.938rem] font-medium leading-[1.33]',
              classNames?.textarea,
              isInputFocused && focusedClassNames?.textarea,
            ])}
          />
          {/* LEFT RIGHT */}
          {IconRight && (
            <IconRight
              className={clsxm([
                'pointer-events-none inline-block shrink-0',
                classNames?.iconLeft,
                isInputFocused && focusedClassNames?.iconRight,
              ])}
            />
          )}
        </div>

        {/* ERROR TEXT */}
        {!!errorText && (
          <div
            className={clsxm([
              'text-error-base text-sm',
              classNames?.errorText,
              isInputFocused && focusedClassNames?.errorText,
            ])}
          >
            {errorText}
          </div>
        )}
      </div>
    );
  },
);

export { TextArea };
