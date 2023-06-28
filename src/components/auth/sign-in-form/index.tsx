import { Typography } from '@mui/material';
import React from 'react';
import Input from '../TextField';

interface SignInFormProps {
  title?: string;
  subtitle?: string;
}

const SignInForm: React.FC<SignInFormProps> = ({ title, subtitle }) => {
  return (
    <div>
      <Typography variant="h1" sx={{ fontWeight: 700 }}>
        SIGN IN
      </Typography>

      <div>
        <Input
          required
          id="user-name"
          label="User Name"
          defaultValue=""
          placeholder="Example123"
        />

        <Input
          required
          id="password"
          label="Password"
          defaultValue=""
          placeholder="******************"
        />
      </div>
    </div>
  );
};

export default SignInForm;
