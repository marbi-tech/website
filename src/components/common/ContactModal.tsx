'use client';

import * as React from 'react';
import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PlaneIcon } from '@/icons';
import { appApi } from '@/utils/api';
import Modal from '@/components/common/Modal';
import { Button, TextArea } from '@/components/ui';
import useQueryParams from '@/hooks/useQueryParams';
import { InputText } from '@/components/ui/InputText';
import { contactSchema } from '@/schemas/contactSchema';
import PhoneNumberInput from '@/components/ui/PhoneNumberInput';

interface ContactModalProps {}

const defaultValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

type ContactFormValues = typeof defaultValues;

const ContactModal: React.FC<ContactModalProps> = (props) => {
  const { getParam, removeParam } = useQueryParams();

  const contact = getParam('contact');

  const closeModal = () => removeParam('contact');

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues,
    resolver: yupResolver(contactSchema),
  });

  const handleContactSubmit = handleSubmit(async (data) => {
    try {
      const res = await appApi.post('/contact', data);
      if (res) {
        reset();
        closeModal();
        toast.success('Contact message sent successfully.');
      }
    } catch (error: any) {
      toast.error(error?.response?.message || 'something went wrong');
    }
  });

  return (
    <Modal isShowing={contact === 'true'} onClose={closeModal}>
      <h5 className='text-[1.4rem] font-semibold'>Let&#39;s get in touch.</h5>

      <form
        className='mt-8 flex flex-col gap-y-6'
        onSubmit={handleContactSubmit}
      >
        <Controller
          control={control}
          name='fullName'
          render={({ field }) => (
            <InputText
              {...field}
              label='Full Name*'
              errorText={errors.fullName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='email'
          render={({ field }) => (
            <InputText
              {...field}
              label='Email*'
              errorText={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='message'
          render={({ field }) => (
            <TextArea
              {...field}
              label='Message*'
              classNames={{
                textarea: 'h-24',
              }}
              errorText={errors.message?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='phone'
          render={({ field }) => (
            <PhoneNumberInput
              label='Phone'
              onChange={field.onChange}
              errorText={errors.phone?.message}
            />
          )}
        />

        <div className='flex justify-end'>
          <Button
            type='submit'
            className='w-44'
            rightIcon={PlaneIcon}
            loading={isSubmitting}
          >
            Send
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export type { ContactFormValues };
export default ContactModal;
