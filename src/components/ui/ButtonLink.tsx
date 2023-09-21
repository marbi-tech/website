import * as React from 'react';
import Link, { LinkProps } from 'next/link';

import clsxm from '@/utils/clsxm';
import { Button, ButtonProps } from '@/components/ui';

interface ButtonLinkProps extends LinkProps, Omit<ButtonProps, 'asChild'> {
  className?: string;
  children?: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  classNames,
  leftIcon,
  rightIcon,
  className,
  variant,
  size,
  loading,
  children,
  disabled,
  ...props
}) => {
  const buttonProps = {
    classNames,
    leftIcon,
    rightIcon,
    className,
    variant,
    size,
    loading,
    children,
    disabled,
  };
  return (
    <Link {...props} className={clsxm([disabled && 'pointer-events-none'])}>
      <Button asSpan {...buttonProps}>
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
