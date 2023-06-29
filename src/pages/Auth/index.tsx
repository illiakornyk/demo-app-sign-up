import { Box } from '@mui/material';
import SignInForm from '../../components/auth/sign-in-form';
import SignUpForm from '../../components/auth/sign-up-form';
import Header from '../../components/header';

function AuthPage() {
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
          border: '1px solid red',
        }}
      >
        <Header title="InCode" subtitle="Finance" />
        {/* <SignUpForm /> */}
        <SignInForm />
      </Box>
    </Box>
  );
}

export default AuthPage;
