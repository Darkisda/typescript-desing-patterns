import isEmail from 'validator/lib/isEmail';
import { EmailValidatorFnProtocol } from './email-validation-protocol';

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string,
) => {
  return isEmail(value);
};
