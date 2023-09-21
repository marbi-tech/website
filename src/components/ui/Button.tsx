'use client';
import React from 'react';

import clsxm from '@/utils/clsxm';
import { SpinnerIcon } from '@/icons';
import useRipple from '@/hooks/useRipple';
import useCombinedRefs from '@/hooks/useCombinedRefs';

enum ButtonSizes {
  'sm',
  'md',
  'lg',
  'none',
}

enum ButtonVariants {
  'primary',
  'secondary',
  'none',
}

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  variant?: keyof typeof ButtonVariants;
  size?: keyof typeof ButtonSizes;
  asSpan?: boolean;
  disabled?: boolean;
  rightIcon?: React.ComponentType<React.ComponentProps<'svg'>>;
  leftIcon?: React.ComponentType<React.ComponentProps<'svg'>>;
  classNames?: {
    loader?: string;
    leftIcon?: string;
    rightIcon?: string;
    children?: string;
  };
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ComponentPropsWithRef<'button'>
>(
  (
    {
      classNames,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      className,
      variant,
      size,
      asSpan,
      loading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const combinedRef = useCombinedRefs(
      buttonRef,
      ref as React.MutableRefObject<HTMLButtonElement>,
    );
    const ripples = useRipple(buttonRef);

    const Component = asSpan ? 'span' : 'button';

    const isDisabled = disabled || loading;

    return (
      <Component
        ref={combinedRef}
        className={clsxm([
          'relative inline-flex shrink-0 justify-center gap-x-4 overflow-hidden duration-200 active:scale-[0.97]',

          // variant
          variant === 'primary' && [
            'bg-primary  text-white hover:bg-primary-700',
          ],

          variant === 'secondary' && [
            'bg-success-base text-white hover:bg-opacity-70',
          ],
          // size
          size === 'sm',
          size === 'md' && 'rounded-xl px-4 py-3',
          isDisabled && 'pointer-events-none',
          disabled && 'opacity-60',

          className,
        ])}
        disabled={isDisabled}
        {...props}
      >
        {/* LEFT SECTION */}
        {LeftIcon && (
          <LeftIcon
            className={clsxm([
              '',
              loading && 'inline-block opacity-0',
              classNames?.leftIcon,
            ])}
          />
        )}

        {/* CHILDREN SECTION */}
        <span
          className={clsxm([
            loading && 'inline-block opacity-0',
            classNames?.children,
          ])}
        >
          {children}
        </span>

        {/* RIGHT SECTION */}
        {RightIcon && (
          <RightIcon
            className={clsxm([
              'h-6 w-6',
              loading && 'inline-block opacity-0',
              classNames?.rightIcon,
            ])}
          />
        )}

        {/* LOADER SECTION */}
        {loading && (
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <SpinnerIcon className='h-6 w-6 animate-spin' />
          </span>
        )}

        {/* Ripple components here */}
        {ripples}
      </Component>
    );
  },
);

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  type: 'button',
};

export type { ButtonProps };
export { Button };
