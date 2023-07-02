import { useState } from 'react';

import { Box } from '@mui/material';

import SignInForm from 'components/auth/sign-in-form';
import SignUpForm from 'components/auth/sign-up-form';
import Header from 'components/header';

function AuthPage() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleToggleForm = () => {
    setShowSignIn((prevShowSignIn) => !prevShowSignIn);
  };

  return (
    <Box
      sx={{
        bgcolor: 'hsla(217, 33%, 17%, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '425px',
          textAlign: 'left',
          padding: '47px',
        }}
      >
        <Header title="InCode" subtitle="Finance" />
        {showSignIn ? (
          <SignInForm onToggleForm={handleToggleForm} />
        ) : (
          <SignUpForm onToggleForm={handleToggleForm} />
        )}
      </Box>
    </Box>
  );
}

export default AuthPage;
