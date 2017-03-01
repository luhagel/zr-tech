import { Accounts } from 'meteor/std:accounts-ui';

Accounts.config({
  sendVerificationEmail: false,
  forbidClientAccountCreation: false,
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  signUpPath: '/signup',
  resetPasswordPath: '/reset-password',
  profilePath: '/profile',
  minimumPasswordLength: 6,
});
