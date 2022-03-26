import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './email-validation-protocol';

export class EmailValidator implements EmailValidatorProtocol {
  validate(value: string) {
    return isEmail(value);
  }
}
