import { Box, Typography, Button, Link } from '@mui/material';
import React from 'react';
import Input from '../../TextFields/TextField';
import PasswordInput from '../../TextFields/PasswordField';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { validationSchemaSignUp } from '../validation/validationSchema';

interface InputTypes {
  'full-name': string;
  'user-name': string;
  password: string;
  'confirm-password': string;
}

const SignUpForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm<InputTypes>({
    resolver: yupResolver(validationSchemaSignUp),
  });

  const submitForm = (data: InputTypes) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(submitForm)}>
      <Typography
        variant="h1"
        sx={{ fontWeight: 700, marginTop: '4.5rem', fontSize: '3.5rem' }}
        color="white"
      >
        SIGN UP
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginTop: '3rem',
        }}
      >
        <Input
          control={control}
          error={errors['full-name']}
          required
          name="full-name"
          id="full-name"
          type="text"
          label="Full Name"
          placeholder="Example Name"
        />
        <Input
          control={control}
          error={errors['user-name']}
          required
          name="user-name"
          id="user-name"
          type="text"
          label="User Name"
          placeholder="Example123"
        />

        <PasswordInput
          name="password"
          control={control}
          error={errors['password']}
        />

        <PasswordInput
          name="confirm-password"
          control={control}
          error={errors['confirm-password']}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '2rem',
        }}
      >
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: 'hsla(91, 78%, 33%, 1)',
            boxShadow:
              '0px 1px 5px 0px hsla(0, 0%, 0%, 0.12), 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14), 0px 3px 1px -2px hsla(0, 0%, 0%, 0.2)',
            borderRadius: 0,
            padding: '10px 16px',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '600',
            '&:hover': {
              backgroundColor: 'hsla(91, 78%, 33%, 0.8)',
            },
          }}
        >
          Sign Up
        </Button>

        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '19px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: 'hsla(120, 4%, 95%, 1)',
            marginTop: '1.5rem',
          }}
        >
          I have an account.{' '}
          <Link
            href="/sign-in"
            sx={{
              color: 'hsla(217, 79%, 72%, 1)',
              textDecoration: 'none',
            }}
          >
            Go to Sign in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpForm;
