import { Box, Typography } from '@mui/material';
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
      </Box>
    </div>
  );
};

export default SignInForm;
