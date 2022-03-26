export interface EmailValidatorProtocol {
  validate: EmailValidatorFnProtocol;
}

export interface EmailValidatorFnProtocol {
  (value: string): boolean;
}
