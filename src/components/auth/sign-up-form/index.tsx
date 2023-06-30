import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchemaSignUp } from '../validation/validationSchema';

import FormButton from 'src/components/buttons/formButton';
import Input from '../../TextFields/TextField';
import PasswordInput from '../../TextFields/PasswordField';

interface InputTypes {
  'full-name': string;
  'user-name': string;
  password: string;
  'confirm-password': string;
}

interface SignUpFormProps {
  onToggleForm: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onToggleForm }) => {
  const {
    handleSubmit,
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
        <FormButton type="submit">Sign Up</FormButton>

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
          <Button
            onClick={onToggleForm}
            sx={{
              color: 'hsla(217, 79%, 72%, 1)',
              textDecoration: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              padding: 0,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            Go to Sign in
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpForm;
