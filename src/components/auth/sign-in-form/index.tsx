import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import Input from '../../TextFields/TextField';
import PasswordInput from '../../TextFields/PasswordField';

interface SignInFormProps {
  title?: string;
  subtitle?: string;
}

const SignInForm: React.FC<SignInFormProps> = ({ title, subtitle }) => {
  return (
    <div>
      <Typography variant="h1" sx={{ fontWeight: 700 }} color="white">
        SIGN IN
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Input
          key="test"
          required
          name="user-name"
          id="user-name"
          type="text"
          label="User Name"
          defaultValue=""
          placeholder="Example123"
        />

        <PasswordInput />

        <Button
          variant="contained"
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
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default SignInForm;
