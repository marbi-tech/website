import { NextResponse } from 'next/server';

import { contactSchema } from '@/schemas/contactSchema';
import sendContactAlertEmail from '@/utils/sendContactAlertEmail';



export async function POST(request: Request) {
  try {
    const contactData = await request.json();

    try {
      const validatedFields = await contactSchema.validate(contactData);
      const response = await sendContactAlertEmail(validatedFields);

      if (response) {
        return NextResponse.json({
          status: 200,
          message: 'Contact message sent successfully',
          response,
        });
      }
    } catch (error) {
      return NextResponse.json({
        message: 'validation error',
        status: 412,
        error,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: 'error', status: 500, error });
  }
}
