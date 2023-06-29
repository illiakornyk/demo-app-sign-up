import * as yup from 'yup';

export const validationSchemaSignIn = yup.object().shape({
  'user-name': yup
    .string()
    .required('User name is required')
    .min(3, 'User name must be at least 3 characters')
    .max(30, 'User name must be at most 30 characters')
    .matches(/^\S*$/, 'User name cannot contain spaces'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be at most 50 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    ),
});

export const validationSchemaSignUp = yup.object().shape({
  'full-name': yup
    .string()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters')
    .max(50, 'Full name must be at most 50 characters'),
  'user-name': yup
    .string()
    .required('User name is required')
    .min(3, 'User name must be at least 3 characters')
    .max(30, 'User name must be at most 30 characters')
    .matches(/^\S*$/, 'User name cannot contain spaces'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be at most 50 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    ),
  'confirm-password': yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
