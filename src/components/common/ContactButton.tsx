'use client';

import * as React from 'react';

import { ButtonProps, Button } from '@/components/ui';
import useQueryParams from '@/hooks/useQueryParams';

const ContactButton: React.FC<Omit<ButtonProps, 'onClick'>> = (props) => {
  const { addParam } = useQueryParams();
  return (
    <Button onClick={() => addParam('contact', 'true')} {...props}>
      {props.children || 'Contact'}
    </Button>
  );
};

export default ContactButton;
