import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppDispatch } from 'redux/store';
import { loginUser } from 'redux/auth/authSlice';

import PasswordInput from 'components/TextFields/PasswordField';
import Input from 'components/TextFields/TextField';
import FormButton from 'components/buttons/formButton';
import { validationSchemaSignIn } from '../validation/validationSchema';

interface InputTypes {
  'user-name': string;
  password: string;
}

interface SignInFormProps {
  onToggleForm: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onToggleForm }) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputTypes>({
    resolver: yupResolver(validationSchemaSignIn),
  });

  const submitForm = (data: InputTypes) => {
    console.log(data);
    // dispatch loginUser action with form data
    dispatch(
      loginUser({ userName: data['user-name'], password: data.password }),
    );
  };

  return (
    <Box component="form" onSubmit={handleSubmit(submitForm)}>
      <Typography
        variant="h1"
        sx={{ fontWeight: 700, marginTop: '4.5rem', fontSize: '3.5rem' }}
        color="white"
      >
        SIGN IN
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
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '2rem',
        }}
      >
        <FormButton type="submit">Sign In</FormButton>

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
          Don’t have account yet?{' '}
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
            New Account
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignInForm;
