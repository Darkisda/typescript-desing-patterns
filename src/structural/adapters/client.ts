import { EmailValidator } from './validations/email-validation';
import { emailValidatorFnAdapter } from './validations/email-validation-fn';

const email = 'email@fake.com';

if (new EmailValidator().validate(email)) {
  console.log('é valido');
} else {
  console.log('invalido');
}

if (emailValidatorFnAdapter(email)) {
  console.log('é valido');
} else {
  console.log('invalido');
}
